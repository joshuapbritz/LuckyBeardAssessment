import { IContactForm } from '../models/contact-form';
export const emailRGX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
export const phoneRGX = /^(\+27|[0])\d{9}$/;

export function validate(input: string, dataType: 'text' | 'number' | 'email' | 'phone' | 'list', options?: { validateList?: string[]; required: boolean }) {
  if (options?.required && !input) return false;

  const inputType = typeof input;

  if ((dataType === 'text' || dataType === 'email') && inputType !== 'string') return false;
  if (dataType === 'number' && inputType !== 'number') return false;

  if (dataType === 'email') {
    const matches = !!input.match(emailRGX);
    if (!matches) return false;
  }

  if (dataType === 'phone') {
    const matches = !!input.match(phoneRGX);
    if (!matches) return false;
  }

  if (dataType === 'list') {
    if (!options?.validateList) throw new TypeError('options.validateList is required when doing a list validity check');
    if (!options.validateList.find(i => i === input)) return false;
  }

  return true;
}

export function verifyContactForm(lead: IContactForm): boolean {
  const values = Object.values(lead);
  if (values.some(i => !i)) return false;

  const nameValid = validate(lead.name, 'text', { required: true });
  if (!nameValid) return false;

  const emailValid = validate(lead.email, 'email', { required: true });
  if (!emailValid) return false;

  const phoneValid = validate(lead.phoneNumber, 'phone', { required: true });
  if (!phoneValid) return false;

  const companyValid = validate(lead.company, 'text', { required: true });
  if (!companyValid) return false;

  const roleValid = validate(lead.role, 'list', { required: true, validateList: ['Developer', 'QA Analyst', 'Business Analyst'] });
  if (!roleValid) return false;

  return true;
}

