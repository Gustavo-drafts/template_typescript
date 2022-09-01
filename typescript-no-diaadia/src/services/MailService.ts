
interface MailTo {
  name: string;
  email: string;
}

/** Objeto(MailMessage) propriedades (subject, body...) */

interface MailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

/** Objeto de tipagens herdadas */
type sendMailType = {
  to: MailTo; // tipo herdado
  message: MailMessage;
}

/** 
 * (Palavra reservada) 'Partial' - Transforma todos os dados de uma
 * <Interface> ou <type> 
 * em dados opcionais 
 * */
type PartialSendMailType = Partial<MailTo>;


/**
 * (Palavra reservada) 'Required' - Faz exatamente o 
 *  oposto de 'Partial'
 */
type RequiredSendMailType = Required<PartialSendMailType>;


class MailService {
  sendMail({ to, message }: sendMailType) {
    console.log( `Email enviado para ${to.email} com o assunto: ${message.subject}` )
  }
}

export default new MailService();