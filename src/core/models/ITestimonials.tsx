interface Message {
  message: string;
  hour: string;
}

export interface ClientMessage {
  name: string;
  image: string;
  preMessage: string;
  hour: string;
  cant: string; // si siempre es numérica conviene usar number
  messages: Message[];
}