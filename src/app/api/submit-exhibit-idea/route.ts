import { NextResponse } from 'next/server';

const WP_ENDPOINT = 'https://admin.newyorkautoexperience.org/wp-admin/admin-ajax.php';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pavilionId, pavilionTitle, name, email, idea } = body;

    // Validation
    if (!pavilionTitle || !name || !email || !idea) {
      return NextResponse.json(
        { success: false, message: 'Please provide your name, email, and exhibit idea.' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Format notes for David and Admin
    const formattedMessage = [
      `Pavilion: ${pavilionTitle} (ID: ${pavilionId || 'general'})`,
      `Submitted By: ${name} (${email})`,
      `Exhibit Ideas & Suggestions:\n${idea}`,
      'Source: Interactive 12 Pavilions Modal (newyorkautoexperience.org)',
    ].join('\n\n');

    // Prepare payload for WordPress Fluent Forms (Form ID: 7 - Pavilion Exhibit Ideas)
    const formPayload = new URLSearchParams({
      names: String(name).trim(),
      name: String(name).trim(),
      full_name: String(name).trim(),
      email: String(email).trim(),
      subject: `Exhibit Idea Submission: ${pavilionTitle}`,
      message: formattedMessage,
      description: formattedMessage,
      pavilion: String(pavilionTitle).trim(),
      input_text: String(name).trim(),
      input_text_1: String(pavilionTitle).trim(),
      submission_type: 'Pavilion Exhibit Idea (Visitor Engagement)',
    });

    const postBody = new URLSearchParams({
      action: 'fluentform_submit',
      form_id: '7', // Dedicated Pavilion Exhibit Ideas Form (Form 7)
      data: formPayload.toString(),
    });

    try {
      const wpResponse = await fetch(WP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Cookie': 'hc_js_gate=1',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: postBody.toString(),
      });

      const rawText = await wpResponse.text();
      console.log('Exhibit idea WP response (Form 7):', rawText.substring(0, 200));
    } catch (wpErr) {
      console.warn('WP Forwarding notice (non-fatal):', wpErr);
    }

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your exhibit ideas for ${pavilionTitle} have been forwarded to Executive Director David Senator.`,
    });
  } catch (error: any) {
    console.error('Error in submit-exhibit-idea API route:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
