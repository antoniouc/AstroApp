// core/observer/Observable.ts
type Listener<T> = (data: T) => void;

export class Observable<T> {
  private listeners: Listener<T>[] = [];

  subscribe(listener: Listener<T>) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: Listener<T>) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  notify(data: T) {
    this.listeners.forEach(listener => listener(data));
  }
}

