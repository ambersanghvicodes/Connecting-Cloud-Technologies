// Fallback used when EmailJS isn't configured: a mailto: link with the enquiry prefilled.
export function buildEnquiryMailto(to, data) {
  const body = [
    `Name: ${data.name}`,
    `Organization: ${data.organization}`,
    `Role: ${data.role || '-'}`,
    `Email: ${data.email}`,
    `Interested in: ${data.interest}`,
    '',
    data.message || '',
  ].join('\n');
  const subject = `Website enquiry: ${data.interest}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
