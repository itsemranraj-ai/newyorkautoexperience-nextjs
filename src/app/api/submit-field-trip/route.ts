import { NextResponse } from 'next/server';

const WP_ENDPOINT = 'https://admin.newyorkautoexperience.org/wp-admin/admin-ajax.php';

const gradeLevelMap: Record<string, string> = {
  'elementary': 'Elementary (Grades 3–5)',
  'middle-school': 'Middle School (Grades 6–8)',
  'high-school': 'High School (Grades 9–12)',
  'college': 'Vocational / College',
};

const titleOneMap: Record<string, string> = {
  'yes': 'Yes (Qualifies for 100% Free Sponsored Tickets)',
  'no': 'No (Standard Educational Group Rate)',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { schoolName, contactName, email, gradeLevel, studentCount, titleOne } = body;

    if (!schoolName || !contactName || !email) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const formPayload = new URLSearchParams({
      school_name: String(schoolName).trim(),
      contact_name: String(contactName).trim(),
      email: String(email).trim(),
      dropdown: gradeLevelMap[gradeLevel] || gradeLevel || 'Middle School (Grades 6–8)',
      student_count: String(studentCount || '50'),
      title_one: titleOneMap[titleOne] || titleOne || 'Yes (Qualifies for 100% Free Sponsored Tickets)',
    });

    const postBody = new URLSearchParams({
      action: 'fluentform_submit',
      form_id: '3',
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
        message: result.data?.result?.message || 'Pre-registration received successfully!',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Submission could not be validated. Please check the information and try again.',
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Error submitting form to WordPress Fluent Forms:', error);
    return NextResponse.json(
      { success: false, message: 'Server connection error. Please try again later.' },
      { status: 500 }
    );
  }
}
