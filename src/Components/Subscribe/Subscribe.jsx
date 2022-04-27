import MailchimpSubscribe from "react-mailchimp-subscribe";

const URL =
  "https://gmail.us14.list-manage.com/subscribe/post?u=ba7451641952972dab0fae9dc&amp;id=6388f68bf2";
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={URL} />;

// use the render prop and your custom form
const Subscribe = () => (
  <MailchimpSubscribe
    url={URL}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);

export default Subscribe;
