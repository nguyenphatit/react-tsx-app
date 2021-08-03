
class LocalStorageHelper {

  public static set(key: string, value: any): void {
      if (typeof value === 'string')
          localStorage.setItem(key, value);
      else
          localStorage.setItem(key, JSON.stringify(value));
  }

  public static get(key: string) {
      const item = (typeof window !== 'undefined') ? localStorage.getItem(key) : null;
      if (item) {
          if (typeof item === 'string') return item;
          else return JSON.parse(item);
      }
  }

  public static delete(key: string): void {
      localStorage.removeItem(key);
  }

  public static clear(): void {
      localStorage.clear();
  }
}

export default LocalStorageHelper
