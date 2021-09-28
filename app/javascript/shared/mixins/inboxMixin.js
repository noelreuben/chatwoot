export const INBOX_TYPES = {
  WEB: 'Channel::WebWidget',
  FB: 'Channel::FacebookPage',
  TWITTER: 'Channel::TwitterProfile',
  TWILIO: 'Channel::TwilioSms',
  WHATSAPP: 'Channel::Whatsapp',
  API: 'Channel::Api',
  EMAIL: 'Channel::Email',
  TELEGRAM: 'Channel::Telegram',
  LINE: 'Channel::Line',
};

export default {
  computed: {
    channelType() {
      return this.inbox.channel_type;
    },
    isAPIInbox() {
      return this.channelType === INBOX_TYPES.API;
    },
    isATwitterInbox() {
      return this.channelType === INBOX_TYPES.TWITTER;
    },
    isAFacebookInbox() {
      return this.channelType === INBOX_TYPES.FB;
    },
    isAWebWidgetInbox() {
      return this.channelType === INBOX_TYPES.WEB;
    },
    isATwilioChannel() {
      return this.channelType === INBOX_TYPES.TWILIO;
    },
    isALineChannel() {
      return this.channelType === INBOX_TYPES.LINE;
    },
    isAnEmailChannel() {
      return this.channelType === INBOX_TYPES.EMAIL;
    },
    isATwilioSMSChannel() {
      const { phone_number: phoneNumber = '' } = this.inbox;
      return this.isATwilioChannel && !phoneNumber.startsWith('whatsapp');
    },
    isATwilioWhatsappChannel() {
      const { phone_number: phoneNumber = '' } = this.inbox;
      return this.isATwilioChannel && phoneNumber.startsWith('whatsapp');
    },
    isAWhatsappChannel() {
      return (
        this.channelType === INBOX_TYPES.WHATSAPP ||
        this.isATwilioWhatsappChannel
      );
    },
  },
};
