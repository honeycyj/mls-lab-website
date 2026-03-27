import { type ChangeEvent, type FormEvent, useState } from "react";
import { Button } from "../../components/foundation/Button/Button";
import { PageReveal } from "../../components/foundation/PageMotion/PageMotion";
import { PageSectionIntro } from "../../components/foundation/PageSectionIntro/PageSectionIntro";
import { SiteFooter } from "../../components/layout/Footer/SiteFooter";
import { SiteHeader } from "../../components/layout/Header/SiteHeader";
import {
  contactPageContent,
  type ContactFormInputField,
  type InquiryType,
} from "./data/contactPageContent";

type InquiryFormState = {
  company: string;
  consent: boolean;
  message: string;
  name: string;
  phone: string;
  product: string;
};

type TextFieldName = Exclude<keyof InquiryFormState, "consent">;
type RequiredFieldName = Exclude<TextFieldName, "message">;

const contactFormRows: RequiredFieldName[][] = [["name", "phone"], ["company"], ["product"]];

const defaultFormState: InquiryFormState = {
  company: "",
  consent: false,
  message: "",
  name: "",
  phone: "",
  product: "",
};

function buildInquiryMailto(inquiryType: InquiryType, formState: InquiryFormState) {
  const params = new URLSearchParams({
    subject: inquiryType.subject,
    body: [
      `咨询类型：${inquiryType.label}`,
      "",
      `联系人姓名：${formState.name.trim()}`,
      `电话：${formState.phone.trim()}`,
      `公司名称：${formState.company.trim()}`,
      `需要了解的产品：${formState.product.trim()}`,
      "",
      "需求描述：",
      formState.message.trim() || "未填写",
    ].join("\n"),
  });

  return `mailto:${inquiryType.recipient}?${params.toString()}`;
}

function getFieldConfig(fieldName: RequiredFieldName): ContactFormInputField {
  return contactPageContent.form.fields[fieldName];
}

function isFormSubmittable(formState: InquiryFormState) {
  return Boolean(
    formState.name.trim() &&
      formState.phone.trim() &&
      formState.company.trim() &&
      formState.product.trim() &&
      formState.consent,
  );
}

export function ContactPage() {
  const [selectedInquiryType, setSelectedInquiryType] = useState<InquiryType["id"]>(
    contactPageContent.inquiryTypes[0].id,
  );
  const [formState, setFormState] = useState(defaultFormState);

  const activeInquiryType =
    contactPageContent.inquiryTypes.find((item) => item.id === selectedInquiryType) ??
    contactPageContent.inquiryTypes[0];
  const canSubmit = isFormSubmittable(formState);

  const handleTextFieldChange =
    (fieldName: TextFieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;

      setFormState((currentState) => ({
        ...currentState,
        [fieldName]: nextValue,
      }));
    };

  const handleConsentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((currentState) => ({
      ...currentState,
      consent: event.target.checked,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    window.location.href = buildInquiryMailto(activeInquiryType, formState);
  };

  return (
    <div className="contact-page">
      <SiteHeader />

      <main className="contact-page__main">
        <PageSectionIntro
          className="contact-page__hero"
          eyebrow={contactPageContent.hero.eyebrow}
          title={contactPageContent.hero.title}
          description={contactPageContent.hero.description}
          delay={0.08}
        />

        <PageReveal as="section" className="contact-banner" delay={0.12}>
          <img
            className="contact-banner__image"
            src={contactPageContent.hero.image.src}
            alt={contactPageContent.hero.image.alt}
          />
        </PageReveal>

        <section className="contact-cards">
          <div className="contact-cards__inner">
            {contactPageContent.contactCards.map((item, index) => (
              <PageReveal
                as="article"
                key={item.title}
                className="contact-card"
                delay={0.08 + index * 0.04}
              >
                <h2>{item.title}</h2>
                <a href={item.href}>{item.value}</a>
              </PageReveal>
            ))}
          </div>
        </section>

        <section className="contact-office">
          <div className="contact-office__inner">
            <div className="contact-office__top">
              <PageReveal className="contact-office__heading" delay={0.08}>
                <h2>{contactPageContent.office.title}</h2>
              </PageReveal>

              <PageReveal className="contact-office__address" delay={0.12}>
                <img src={contactPageContent.office.pinIconSrc} alt="" aria-hidden="true" />
                <div>
                  <p>{contactPageContent.office.city}</p>
                  <p>{contactPageContent.office.campus}</p>
                </div>
              </PageReveal>
            </div>

            <PageReveal className="contact-office__image-wrap" delay={0.16}>
              <img
                className="contact-office__image"
                src={contactPageContent.office.image.src}
                alt={contactPageContent.office.image.alt}
              />
            </PageReveal>
          </div>
        </section>

        <div className="contact-divider" aria-hidden="true" />

        <section className="contact-form-section">
          <PageReveal className="contact-form-section__tabs" delay={0.08}>
            <div className="contact-form-section__tab-list" role="tablist" aria-label="咨询类型">
              {contactPageContent.inquiryTypes.map((item) => (
                <button
                  key={item.id}
                  className={`contact-form-section__tab${item.id === selectedInquiryType ? " is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={item.id === selectedInquiryType}
                  onClick={() => setSelectedInquiryType(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </PageReveal>

          <div className="contact-form-section__inner">
            <PageReveal className="contact-form-section__header" delay={0.12}>
              <h2>{contactPageContent.form.title}</h2>
              <p>{contactPageContent.form.description}</p>
            </PageReveal>

            <PageReveal className="contact-form-shell" delay={0.16}>
              <form className="contact-form" onSubmit={handleSubmit}>
                {contactFormRows.map((row) => (
                  <div
                    key={row.join("-")}
                    className={row.length > 1 ? "contact-form__row" : "contact-form__stack"}
                  >
                    {row.map((fieldName) => {
                      const field = getFieldConfig(fieldName);

                      return (
                        <label key={fieldName} className="contact-form__field">
                          <span className="contact-form__label">
                            {field.label}
                            <span className="contact-form__required" aria-hidden="true">
                              *
                            </span>
                          </span>
                          <input
                            type={field.type ?? "text"}
                            autoComplete={field.autocomplete}
                            required
                            placeholder={field.placeholder}
                            value={formState[fieldName]}
                            onChange={handleTextFieldChange(fieldName)}
                          />
                        </label>
                      );
                    })}
                  </div>
                ))}

                <label className="contact-form__field contact-form__field--textarea">
                  <span className="contact-form__label">
                    {contactPageContent.form.fields.message.label}
                  </span>
                  <textarea
                    rows={5}
                    placeholder={contactPageContent.form.fields.message.placeholder}
                    value={formState.message}
                    onChange={handleTextFieldChange("message")}
                  />
                </label>

                <label className="contact-form__consent">
                  <input
                    type="checkbox"
                    checked={formState.consent}
                    onChange={handleConsentChange}
                  />
                  <span>
                    {contactPageContent.form.fields.consent}
                    <a href={contactPageContent.form.privacyHref}>
                      {contactPageContent.form.privacyLabel}
                    </a>
                  </span>
                </label>

                <Button
                  className="contact-form__submit"
                  disabled={!canSubmit}
                  fullWidth
                  size="lg"
                  type="submit"
                  variant="primary"
                >
                  {contactPageContent.form.submitLabel}
                </Button>
              </form>
            </PageReveal>
          </div>
        </section>
      </main>

      <PageReveal delay={0.04}>
        <SiteFooter />
      </PageReveal>
    </div>
  );
}
