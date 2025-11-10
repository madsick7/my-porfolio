import { create } from 'zustand';
import { ContactFormData, FormSubmissionResult } from '../types';

interface FormStore {
  formData: ContactFormData;
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
  updateFormData: (data: Partial<ContactFormData>) => void;
  submitForm: () => Promise<FormSubmissionResult>;
  resetForm: () => void;
  clearMessages: () => void;
}

export const useFormStore = create<FormStore>((set, get) => ({
  formData: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  isSubmitting: false,
  error: null,
  success: false,

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  submitForm: async () => {
    set({ isSubmitting: true, error: null, success: false });

    try {
      const formData = get().formData;

      // Client-side validation
      if (!formData.name.trim()) {
        throw new Error('Name is required');
      }
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error('Valid email is required');
      }
      if (!formData.subject.trim()) {
        throw new Error('Subject is required');
      }
      if (!formData.message.trim()) {
        throw new Error('Message is required');
      }

      // Simulate API call with local storage
      const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('formSubmissions', JSON.stringify(submissions));

      set({ success: true, isSubmitting: false });
      get().resetForm();

      return {
        success: true,
        message: 'Form submitted successfully! Thank you for reaching out.',
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit form';
      set({ error: errorMessage, isSubmitting: false });
      return {
        success: false,
        message: errorMessage,
      };
    }
  },

  resetForm: () =>
    set({
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }),

  clearMessages: () =>
    set({
      error: null,
      success: false,
    }),
}));
