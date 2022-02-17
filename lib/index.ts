import type { EventEmitter } from 'events';

/**
 * @param event The event emitter
 * @param result The result to return when the event emitter closes
 * @returns A promise that resolves to the result when the event emitter closes
 */
export function promisifyEventEmitter(event: EventEmitter): Promise<undefined>;
export function promisifyEventEmitter<T>(event: EventEmitter, result: T): Promise<T>;
export function promisifyEventEmitter<T>(event: EventEmitter, result?: T | undefined): Promise<T | undefined> {
  return new Promise<T | undefined>((resolve, reject) => {
    event.on('end', () => resolve(result));
    event.on('error', reject);
  });
}
