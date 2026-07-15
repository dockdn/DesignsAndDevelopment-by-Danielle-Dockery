"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  getInquiryDescriptionPrefill,
  inquiryServiceOptions,
  normalizeInquiryService,
} from "@/lib/inquiry";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type SubmissionState = "idle" | "success" | "error";

export function RequestFormSection() {
  const searchParams = useSearchParams();
  const requestedServiceParam = searchParams.get("service");
  const requestedEnhancementParam = searchParams.get("enhancement");
  const lastAutofillRef = useRef("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [serviceValue, setServiceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  useEffect(() => {
    const requestedService = normalizeInquiryService(requestedServiceParam);
    const nextDescription = getInquiryDescriptionPrefill(requestedService, requestedEnhancementParam);

    setServiceValue(requestedService ?? "");
    setDescriptionValue((currentValue) => {
      if (!nextDescription) {
        if (currentValue === lastAutofillRef.current) {
          lastAutofillRef.current = "";
          return "";
        }

        return currentValue;
      }

      if (currentValue.trim() === "" || currentValue === lastAutofillRef.current) {
        lastAutofillRef.current = nextDescription;
        return nextDescription;
      }

      return currentValue;
    });
  }, [requestedEnhancementParam, requestedServiceParam]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORM_ENDPOINT) {
      setSubmissionState("error");
      setStatusMessage(
        "The project request form is not connected yet. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to continue."
      );
      return;
    }

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionState("idle");
    setStatusMessage("");

    try {
      const formData = new FormData(form);
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      const requestedService = normalizeInquiryService(requestedServiceParam);
      const nextDescription = getInquiryDescriptionPrefill(requestedService, requestedEnhancementParam);

      setServiceValue(requestedService ?? "");
      lastAutofillRef.current = nextDescription;
      setDescriptionValue(nextDescription);

      setSubmissionState("success");
      setStatusMessage(
        "Thank you! Your project request has been received. I’ll be in touch within 1 business day."
      );
    } catch {
      setSubmissionState("error");
      setStatusMessage(
        "Something went wrong while sending your request. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section" id="start-project">
      <div className="container request-section-layout">
        <div className="request-section-copy reveal">
          <span className="eyebrow">Start a Project</span>
          <h2>
            Have a project in mind?
            <br />
            Let&apos;s build something that works beautifully.
          </h2>
          <p>
            Tell me what you are creating, what you need help with, and what a
            successful final result would look like. I will review your request and
            follow up to discuss the best next steps.
          </p>
          <p className="request-response-time">Typical response time: Within 1 business day.</p>
          <ul className="request-points" aria-label="Project request reassurance points">
            <li>Clear communication from first inquiry to final delivery.</li>
            <li>Thoughtful design and development shaped around real use.</li>
            <li>Flexible enough for websites, presentations, apps, and custom tools.</li>
          </ul>
        </div>

        <div className="form-panel request-form-panel reveal delay-1">
          <form
            className="form-grid form-grid-refined"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field full">
              <label htmlFor="organization">Business or organization (optional)</label>
              <input
                id="organization"
                name="organization"
                type="text"
                autoComplete="organization"
              />
            </div>
            <div className="field">
              <label htmlFor="service">Service needed</label>
              <select
                id="service"
                name="service"
                value={serviceValue}
                onChange={(event) => setServiceValue(event.target.value)}
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                {inquiryServiceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <p className="field-help">
                Need more than one service? Select &ldquo;Multiple Services&rdquo; and include everything you need below.
              </p>
            </div>
            <div className="field">
              <label htmlFor="timeline">Desired timeline</label>
              <input id="timeline" name="timeline" type="text" />
            </div>
            <div className="field full">
              <label htmlFor="description">Project description</label>
              <textarea
                id="description"
                name="description"
                required
                value={descriptionValue}
                onChange={(event) => setDescriptionValue(event.target.value)}
              />
            </div>
            <div className="field full">
              <label htmlFor="budget">Approximate budget</label>
              <select id="budget" name="budget" defaultValue="" required>
                <option value="" disabled>
                  Select a budget range
                </option>
                <option>Not Sure Yet</option>
                <option>Under $1,000</option>
                <option>$1,000–$2,500</option>
                <option>$2,500–$5,000</option>
                <option>Custom Project</option>
              </select>
              <p className="field-help">
                Every project is different. This simply helps me recommend the right solution.
              </p>
            </div>
            <div className="field full">
              <button className="button" type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
                {isSubmitting ? "Sending Request..." : "Submit Project Request"}
              </button>
            </div>
            <div
              className={`form-status-message ${submissionState === "success" ? "is-success" : ""} ${
                submissionState === "error" ? "is-error" : ""
              }`}
              aria-live="polite"
              aria-atomic="true"
              role={submissionState === "error" ? "alert" : "status"}
            >
              {statusMessage}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
