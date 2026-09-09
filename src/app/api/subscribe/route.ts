import { NextResponse } from 'next/server';

const WP_ENDPOINT = 'https://admin.newyorkautoexperience.org/wp-admin/admin-ajax.php';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const formPayload = new URLSearchParams({
      email: String(email).trim(),
    });

    const postBody = new URLSearchParams({
      action: 'fluentform_submit',
      form_id: '2',
      data: formPayload.toString(),
    });

    const wpResponse = await fetch(WP_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'NYAutoExperience-NextJS-Client/1.0',
      },
      body: postBody.toString(),
    });

    const result = await wpResponse.json();

    if (result.success) {
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
    console.error('Error submitting newsletter to WordPress Fluent Forms:', error);
    return NextResponse.json(
      { success: false, message: 'Server connection error. Please try again later.' },
      { status: 500 }
    );
  }
}
