import { notification } from '@test/utils';

export function useNotification() {
  return {
    onNotice: (msg: string) => {
      notification(msg);
    },
  };
}
