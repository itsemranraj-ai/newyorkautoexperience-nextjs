import { NextResponse } from 'next/server';
import { submitToSalesforce } from '@/lib/salesforce';

const WP_ENDPOINT = 'https://admin.newyorkautoexperience.org/wp-admin/admin-ajax.php';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const cleanEmail = typeof email === 'string' ? email.trim() : '';

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Forward simultaneously to Salesforce Web-to-Lead CRM (grouped under Newsletter with .com)
    await submitToSalesforce({
      firstName: 'Newsletter',
      lastName: 'Subscriber',
      email: cleanEmail,
      phone: '',
      company: 'NYAE Newsletter Subscriber',
      leadSource: 'Newsletter',
      description: 'Subscribed to The New York Auto Experience (.org) newsletter via website footer.',
    }).catch((err) => console.warn('[Salesforce .org Newsletter] Forwarding error:', err));

    const formPayload = new URLSearchParams({
      email: cleanEmail,
    });

    const postBody = new URLSearchParams({
      action: 'fluentform_submit',
      form_id: '2',
      data: formPayload.toString(),
    });

    const wpResponse = await fetch(WP_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'Cookie': 'hc_js_gate=1',
      },
      body: postBody.toString(),
      cache: 'no-store',
    });

    const rawText = await wpResponse.text();
    let result: any = null;
    try {
      result = JSON.parse(rawText);
    } catch (_) {
      console.warn('WP Newsletter response was not JSON (Salesforce already captured lead):', rawText.substring(0, 200));
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing to The New York Auto Experience updates!',
      });
    }

    if (result?.success) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing to The New York Auto Experience updates!',
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Subscription could not be completed. Please try again.' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Error submitting newsletter to WordPress/Salesforce:', error);
    return NextResponse.json(
      { success: false, message: 'Server connection error. Please try again later.' },
      { status: 500 }
    );
  }
}
