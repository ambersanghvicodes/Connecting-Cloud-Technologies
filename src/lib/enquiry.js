// Fallback used when the briefing endpoint isn't configured: a mailto: link with the enquiry prefilled.
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

// Fields for the Google Apps Script briefing endpoint. The sheet stores name,
// organization, email and message, so role and interest are folded into message.
export function buildBriefingFormData(data) {
  const body = new FormData();
  body.append('name', data.name);
  body.append('organization', data.organization);
  body.append('email', data.email);
  const context = [`Interested in: ${data.interest}`, data.role ? `Role: ${data.role}` : null].filter(Boolean).join('\n');
  body.append('message', data.message ? `${context}\n\n${data.message}` : context);
  body.append('interest', data.interest);
  body.append('role', data.role || '');
  return body;
}
