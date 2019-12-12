export function signInRequest() {
  return {
    type: '@auth/SIGN_IN_REQUEST',
  };
}

export function signInSuccess() {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
