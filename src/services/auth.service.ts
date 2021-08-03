class AuthService {

  public static login(email: string, password: string) {
    if (email && password && email === 'test@gmail.com' && password === '123') {
      return {
        email: 'test@gmail.com',
        name: 'Test'
      }
    } else {
      return null;
    }
  }
}

export default AuthService
