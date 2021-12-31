/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function DateFormatter(date: string) {
  return format(new Date(date), 'd MMM y', {
    locale: ptBR,
  });
}
