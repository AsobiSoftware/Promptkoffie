export interface UserSignupPayload {
  email: string;
  userType?: string;
}

export interface BusinessSignupPayload {
  email: string;
  companyName: string;
  contactPerson: string;
  sector: string;
}

export interface SignupResponse {
  success: boolean;
  message: string;
  error?: string;
  id?: string;
  alreadyRegistered?: boolean;
  totalUsers?: number;
  totalBusinesses?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'gebruikers' | 'privacy' | 'adverteerders';
}
