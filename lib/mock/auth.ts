// Mock user data store
const users = new Map<string, {
  id: string;
  email: string;
  password: string;
}>();

// Add test user
users.set('tasavvuf@xyz.com', {
  id: '1234-5678-9012',
  email: 'tasavvuf@xyz.com',
  password: 'tasavvuf'
});

// Mock session store
let currentSession: { user: { id: string; email: string } } | null = null;

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function mockSignUp(email: string, password: string) {
  // Validate email format
  if (!EMAIL_REGEX.test(email)) {
    return { error: { message: 'Invalid email format' } };
  }

  // Validate password length
  if (password.length < 6) {
    return { error: { message: 'Password must be at least 6 characters' } };
  }

  if (users.has(email)) {
    return { error: { message: 'User already exists' } };
  }

  const id = Math.random().toString(36).substring(2);
  users.set(email, { id, email, password });
  
  return { data: { user: { id, email } }, error: null };
}

export async function mockSignIn(email: string, password: string) {
  // Validate email format
  if (!EMAIL_REGEX.test(email)) {
    return { error: { message: 'Invalid email format' } };
  }

  const user = users.get(email);
  
  if (!user || user.password !== password) {
    return { error: { message: 'Invalid credentials' } };
  }

  currentSession = { user: { id: user.id, email: user.email } };
  return { data: { session: currentSession }, error: null };
}

export async function mockSignOut() {
  currentSession = null;
  return { error: null };
}

export async function mockGetSession() {
  return { session: currentSession, error: null };
}