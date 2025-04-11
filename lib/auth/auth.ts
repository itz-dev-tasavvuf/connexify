import { 
  mockSignUp, 
  mockSignIn, 
  mockSignOut, 
  mockGetSession 
} from '../mock/auth';

export async function signUp(email: string, password: string) {
  return mockSignUp(email, password);
}

export async function signIn(email: string, password: string) {
  const result = await mockSignIn(email, password);
  return {
    data: {
      session: result.data?.session
    },
    error: result.error
  };
}

export async function signOut() {
  return mockSignOut();
}

export async function getSession() {
  return mockGetSession();
}