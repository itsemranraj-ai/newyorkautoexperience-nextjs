// Master Headless WordPress API Client for The New York Auto Experience

export interface SiteContent {
  // Header
  announcement_badge: string;
  announcement_text: string;
  announcement_link: string;
  header_btn_visit: string;
  header_btn_donate: string;

  // Home Hero & KPIs
  home_hero_tag: string;
  home_hero_title: string;
  home_hero_desc: string;
  home_hero_btn_primary: string;
  home_hero_btn_secondary: string;
  home_hero_image: string;

  kpi1_target: number;
  kpi1_label: string;
  kpi1_subtext: string;
  kpi2_target: number;
  kpi2_label: string;
  kpi2_subtext: string;
  kpi3_target: number;
  kpi3_label: string;
  kpi3_subtext: string;
  kpi4_target: number;
  kpi4_label: string;
  kpi4_subtext: string;

  // Dual Charter
  dual_charter_title: string;
  dual_charter_subtitle: string;
  comm_card_title: string;
  comm_card_desc: string;
  nonprofit_card_title: string;
  nonprofit_card_desc: string;
  why_dual_charter: string;

  // STEM Section
  stem_section_title: string;
  stem_section_subtitle: string;
  stem_info_headline: string;
  stem_info_desc: string;
  stem_benefit1_title: string;
  stem_benefit1_desc: string;
  stem_benefit2_title: string;
  stem_benefit2_desc: string;
  stem_benefit3_title: string;
  stem_benefit3_desc: string;

  // Mission Page
  mission_hero_tag: string;
  mission_hero_title: string;
  mission_hero_quote: string;
  pillar1_title: string;
  pillar1_desc: string;
  pillar2_title: string;
  pillar2_desc: string;
  pillar3_title: string;
  pillar3_desc: string;
  gov_card1_title: string;
  gov_card1_desc: string;
  gov_card2_title: string;
  gov_card2_desc: string;
  gov_card3_title: string;
  gov_card3_desc: string;
  gov_card4_title: string;
  gov_card4_desc: string;

  // Exhibits Page
  exhibits_page_title: string;
  exhibits_page_subtitle: string;
  exhibits_cta_title: string;
  exhibits_cta_subtitle: string;

  // Donate Page
  donate_page_title: string;
  donate_page_subtitle: string;
  impact_tier_25: string;
  impact_tier_50: string;
  impact_tier_100: string;
  impact_tier_250: string;
  alloc1_percent: string;
  alloc1_title: string;
  alloc1_desc: string;
  alloc2_percent: string;
  alloc2_title: string;
  alloc2_desc: string;
  alloc3_percent: string;
  alloc3_title: string;
  alloc3_desc: string;
  check_mail_text: string;
  wire_transfer_text: string;
  matching_gifts_text: string;
  zeffy_embed_url: string;

  // Footer
  footer_desc: string;
  headquarters_addr: string;
  official_email: string;
  ein_number: string;
  partner_museum_url: string;
}

export const defaultSiteContent: SiteContent = {
  announcement_badge: 'Now Booking 2026–2027',
  announcement_text: 'NYC STEM Field Trips • Sponsored 100% Free Admissions for Title 1 Public Schools',
  announcement_link: '/#stem-portal',
  header_btn_visit: 'Plan School Visit',
  header_btn_donate: 'Donate Now',

  home_hero_tag: 'Automotive Science, Technology & Innovation',
  home_hero_title: 'Empowering 2 Million Students Through Automotive STEM.',
  home_hero_desc: 'Rooted in the spirit of innovation, our nonprofit provides high-impact hands-on learning experiences in robotics, clean energy, aerodynamics, and mechanics for students across America.',
  home_hero_btn_primary: 'Explore 12+ Exhibits',
  home_hero_btn_secondary: 'Request School Field Trip',
  home_hero_image: '/future.jpg',

  kpi1_target: 2000000,
  kpi1_label: 'Students Targeted',
  kpi1_subtext: 'Comprehensive STEM outreach in NY and nationwide',
  kpi2_target: 500000,
  kpi2_label: 'Tickets Donated Annually',
  kpi2_subtext: 'Free admission granted to public schools & youth',
  kpi3_target: 15000000,
  kpi3_label: 'Annual Educational Impact',
  kpi3_subtext: 'Underwritten educational value delivered every year',
  kpi4_target: 12,
  kpi4_label: 'Interactive Stations',
  kpi4_subtext: 'From autonomous AI navigation to EV powertrains',

  dual_charter_title: 'The Dual Charter Innovation Model',
  dual_charter_subtitle: 'How commercial automotive excitement fuels lasting educational equity for American youth.',
  comm_card_title: 'Metropolitan New York Auto Experience Center',
  comm_card_desc: 'A world-class commercial automotive destination in the greater New York metropolitan area. Drives self-sustaining revenue through public admissions, dynamic simulators, motorsport showcases, and corporate hospitality.',
  nonprofit_card_title: 'The New York Auto Experience Inc.',
  nonprofit_card_desc: 'The dedicated educational foundation chartered to transform automotive science into accessible STEM curricula. Dedicated to ensuring that lack of personal financial means never prevents a curious child from learning.',
  why_dual_charter: 'Traditional nonprofits often struggle with unpredictable funding and budget shortfalls. By partnering directly with the Experience Center, our 501(c)(3) nonprofit foundation enjoys guaranteed baseline facilities, museum access, and ongoing operational support, ensuring over 90% of donor dollars go directly into student admissions and STEM education.',

  stem_section_title: 'Dedicated STEM Education & Field Trips',
  stem_section_subtitle: 'Connecting classroom physics, chemistry, and engineering standards with dynamic real-world automotive machines.',
  stem_info_headline: 'Sponsored Access For New York & Tri-State Schools',
  stem_info_desc: 'We partner with local school districts, charter networks, and youth organizations to provide structured, curriculum-aligned museum excursions. Every visit is designed to stimulate analytical thinking and inspire STEM career pursuits.',
  stem_benefit1_title: '100% Free Title 1 Admissions',
  stem_benefit1_desc: 'Schools where 40%+ of students qualify for free/reduced lunch receive fully sponsored entrance badges and activity workbooks.',
  stem_benefit2_title: 'NGSS Standards Aligned',
  stem_benefit2_desc: 'Hands-on modules reinforce Next Generation Science Standards covering kinetics, thermodynamic efficiency, electric circuits, and software logic.',
  stem_benefit3_title: 'Transportation Subsidies Available',
  stem_benefit3_desc: 'Need-based transportation grants help underwrite yellow bus transit costs so schools never miss out due to travel expense.',

  mission_hero_tag: '501(c)(3) Public Charity • EIN: 922822778',
  mission_hero_title: 'Our Mission of Impact & Inspiration.',
  mission_hero_quote: '"The mission of the New York Auto Experience Inc. Nonprofit is to create a world-class STEM based education experience for millions of students across America. These automotive based experiences are designed to educate, enlighten and entertain."',

  pillar1_title: '1. Educate',
  pillar1_desc: 'Providing structured, hands-on STEM curriculum aligned with state physics and engineering standards. Students explore aerodynamics, regenerative electric powertrains, sensor fusion, and crash-test physics firsthand.',
  pillar2_title: '2. Enlighten',
  pillar2_desc: 'Opening doors to modern high-paying technological and engineering careers for youth who have never been exposed to the automotive innovation ecosystem. Mentorship programs with automotive engineers and curators.',
  pillar3_title: '3. Entertain',
  pillar3_desc: 'Making education unforgettable through immersive multi-sensory experiences, historical racing showcases, tactile simulator benches, and theatrical demonstrations that ignite lifelong passion.',

  gov_card1_title: '501(c)(3) Public Charity',
  gov_card1_desc: 'Organized exclusively for educational and charitable purposes under the US Internal Revenue Code.',
  gov_card2_title: 'EIN: 922822778',
  gov_card2_desc: 'All contributions are tax-deductible to the full extent of the law for individuals and corporations.',
  gov_card3_title: 'Public Form 990',
  gov_card3_desc: 'Annual independent financial audits and public IRS Form 990 disclosures published for total donor trust.',
  gov_card4_title: 'Independent Board',
  gov_card4_desc: 'Governed by an independent Board of Trustees representing automotive pioneers, educators, and civic leaders.',

  exhibits_page_title: 'Exhibits & STEM Demonstrations',
  exhibits_page_subtitle: 'From the inner mechanics of combustion and electric powertrains to advanced artificial intelligence and aerodynamics, discover 12 permanent learning stations.',
  exhibits_cta_title: 'Bring Your Students to Experience These Exhibits in Person',
  exhibits_cta_subtitle: '100% of admission fees are waived for public schools, Title 1 classrooms, and youth organizations through our annual 500,000+ ticket sponsorship program.',

  donate_page_title: 'Fuel the Next Generation of Innovators',
  donate_page_subtitle: 'When you give, you remove financial barriers for students from under-resourced schools to experience hands-on STEM learning in New York City.',
  impact_tier_25: 'Underwrites 1 Title 1 student admission and hands-on STEM lab notebook.',
  impact_tier_50: 'Sponsors 2 students complete immersive STEM lab experience and guided engineering session.',
  impact_tier_100: 'Funds full interactive workshop materials and robotics kit for an entire student group.',
  impact_tier_250: 'Sponsors an entire classroom bus transit grant and provides teacher follow-up curriculum.',

  alloc1_percent: '75%',
  alloc1_title: 'Direct Student Admissions',
  alloc1_desc: 'Free tickets & hands-on workshop materials for Title 1 public schools.',
  alloc2_percent: '17%',
  alloc2_title: 'School Bus Transportation',
  alloc2_desc: 'Subsidizing transit costs for underserved districts across New York.',
  alloc3_percent: '8%',
  alloc3_title: 'Curriculum & Safety',
  alloc3_desc: 'NGSS-aligned lesson packs, physics experiment gear, and laboratory safety equipment.',

  check_mail_text: "The New York Auto Experience Inc.\n767 Broadway #1671\nNew York, NY 10003, USA\nMemo: STEM Youth Fund",
  wire_transfer_text: 'For bank wire instructions, routing numbers, or DAF (Donor Advised Fund) direct distribution, contact: info@newyorkautoexperience.org',
  matching_gifts_text: 'Many companies double or triple employee charitable contributions. Search your company portal for The New York Auto Experience Inc. (EIN: 922822778).',
  zeffy_embed_url: 'https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-14593?donate=true',

  footer_desc: 'A certified 501(c)(3) nonprofit public charity (EIN: 922822778) empowering millions of students through automotive science, technology, engineering, and arts.',
  headquarters_addr: '767 Broadway #1671, New York, NY 10003, USA',
  official_email: 'info@newyorkautoexperience.org',
  ein_number: '922822778',
  partner_museum_url: 'https://newyorkautomuseum.com/',
};

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://itsemranraj.com/nyauto';

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/autoexperience/v1/content`, {
      next: { revalidate: 15 },
    });
    if (res.ok) {
      const data = await res.json();
      return { ...defaultSiteContent, ...data };
    }
  } catch (err) {
    console.warn('Using resilient fallback content:', err);
  }
  return defaultSiteContent;
}

export interface FieldTripSubmission {
  schoolName: string;
  contactName: string;
  email: string;
  gradeLevel: string;
  studentCount: string;
  titleOne: string;
}

export async function submitFieldTripBooking(data: FieldTripSubmission): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/autoexperience/v1/book-trip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error) {
    return { success: false, message: 'Failed to submit inquiry.' };
  }
}
