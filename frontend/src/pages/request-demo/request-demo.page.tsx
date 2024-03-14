import React, { useEffect, useState } from 'react';
import styles from './request-demo.module.css';
import classNames from 'classnames';
import { IArticle, IContactForm } from './request-demo.models';
import { request, IErrorResponse } from '../../library/api';
import { useForm, Controller } from 'react-hook-form';
import { Skeleton } from '../../components/skeleton/skeleton';
import { emailRGX, phoneRGX } from './request-demo.helpers';
import { Toast } from '../../components/toast/toast';

export function RequestDemoPage(): JSX.Element {
  const { control, handleSubmit, formState } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const [submissionStatus, setSubmissionStatus] = useState<{ isSubmitting: boolean; isSubmitted: boolean; hasSubmissionError: boolean }>({ isSubmitted: false, isSubmitting: false, hasSubmissionError: false });
  const [articleData, setArticleData] = useState<{ isLoading: boolean; data?: IArticle[]; error?: string }>({ isLoading: true });

  useEffect(() => {
    request<IArticle[]>(`${process.env.REACT_APP_API_URL}contact/articles`).then(articles => {
      if (articles instanceof IErrorResponse || !articles) {
        setArticleData({ isLoading: false, error: `Couldn't load articles` });
      } else setArticleData({ isLoading: false, data: articles });
    });
  }, []);

  async function requestDemo(body: IContactForm) {
    setSubmissionStatus({ isSubmitting: true, isSubmitted: false, hasSubmissionError: false });

    const response = await request<IContactForm>(`${process.env.REACT_APP_API_URL}contact`, { method: 'POST', body });

    if (response instanceof IErrorResponse || !response) {
      setSubmissionStatus({ isSubmitting: false, isSubmitted: false, hasSubmissionError: true });
    } else {
      setSubmissionStatus({ isSubmitting: false, isSubmitted: true, hasSubmissionError: false });
    }
  }

  return (
    <div className={styles.requestPageContainer}>
      <header className={styles.headerWrapper}>
        <div className={classNames(styles.headerContent, 'headerContent')}>
          <h1>Request a demo</h1>
          <p>If you are a professional, we offer a desktop admin platform, to allow a better and faster management of your whole business</p>
        </div>
      </header>

      <article className={classNames('wrapper', styles.requestPageContent)}>
        {!submissionStatus.isSubmitted && (
          <form className={classNames(styles.requestPageFormWrapper)} onSubmit={handleSubmit((values: any) => requestDemo(values))}>
            <h2 className="dark">Please fill your application</h2>

            <div className="formControl">
              <Controller
                name="name"
                control={control}
                rules={{
                  required: 'Please enter your name',
                  maxLength: {
                    value: 50,
                    message: 'Cannot enter more than 50 characters',
                  },
                  validate: {
                    alpha: (value: string) => {
                      return !!value.match(/^[a-zA-Z\s]*$/gi) || 'Please only use letters and spaces';
                    },
                  },
                }}
                render={({ field, fieldState }) => {
                  const hasError = !!fieldState.error;
                  const errorMessage = fieldState.error?.message;

                  return (
                    <React.Fragment>
                      <label htmlFor="name" className={classNames('textFieldWrapper', { invalid: hasError, valid: !hasError && fieldState.isDirty })}>
                        <input placeholder="Your name" type="text" {...field} />
                        <span className="textFieldLabel">Your name</span>
                      </label>

                      {hasError && <span className="formError">{errorMessage ?? 'There is an error on this field'}</span>}
                    </React.Fragment>
                  );
                }}
              />
            </div>

            <div className="formControl">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Please enter your email',
                  maxLength: {
                    value: 50,
                    message: `Email cannot be more than 50 characters`,
                  },
                  validate: {
                    emailValid: (value: string) => {
                      return !!value.match(emailRGX) || `Please enter a valid email`;
                    },
                  },
                }}
                render={({ field, fieldState }) => {
                  const hasError = !!fieldState.error;
                  const errorMessage = fieldState.error?.message;

                  return (
                    <React.Fragment>
                      <label htmlFor="email" className={classNames('textFieldWrapper', { invalid: hasError, valid: !hasError && fieldState.isDirty })}>
                        <input placeholder="Your email" type="email" {...field} />
                        <span className="textFieldLabel">Your email</span>
                      </label>

                      {hasError && <span className="formError">{errorMessage ?? 'There is an error on this field'}</span>}
                    </React.Fragment>
                  );
                }}
              />
            </div>

            <div className="formControl">
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: 'Please enter a phone number',
                  maxLength: {
                    value: 13,
                    message: `Phone number cannot contain more that 13 digits`,
                  },
                  validate: {
                    validPhone: (value: string) => {
                      return !!value.match(phoneRGX) || `Please enter a valid phone number`;
                    },
                  },
                }}
                render={({ field, fieldState }) => {
                  const hasError = !!fieldState.error;
                  const errorMessage = fieldState.error?.message;

                  return (
                    <React.Fragment>
                      <label htmlFor="phoneNumber" className={classNames('textFieldWrapper', { invalid: hasError, valid: !hasError && fieldState.isDirty })}>
                        <input placeholder="Mobile number" type="tel" {...field} />
                        <span className="textFieldLabel">Mobile number</span>
                      </label>

                      {hasError && <span className="formError">{errorMessage ?? 'There is an error on this field'}</span>}
                    </React.Fragment>
                  );
                }}
              />
            </div>

            <div className="formControl">
              <Controller
                name="company"
                control={control}
                rules={{
                  required: 'Please enter your company',
                  maxLength: {
                    value: 50,
                    message: 'Cannot enter more than 50 characters',
                  },
                }}
                render={({ field, fieldState }) => {
                  const hasError = !!fieldState.error;
                  const errorMessage = fieldState.error?.message;

                  return (
                    <React.Fragment>
                      <label htmlFor="company" className={classNames('textFieldWrapper', { invalid: hasError, valid: !hasError && fieldState.isDirty })}>
                        <input placeholder="Company" type="text" {...field} />
                        <span className="textFieldLabel">Company</span>
                      </label>

                      {hasError && <span className="formError">{errorMessage ?? 'There is an error on this field'}</span>}
                    </React.Fragment>
                  );
                }}
              />
            </div>

            <div className="formControl">
              <Controller
                name="role"
                control={control}
                rules={{ required: 'Please select your role' }}
                render={({ field, fieldState }) => {
                  const hasError = !!fieldState.error;
                  const errorMessage = fieldState.error?.message;

                  return (
                    <React.Fragment>
                      <label htmlFor="role" className={classNames('textFieldWrapper', { invalid: hasError, valid: !hasError && fieldState.isDirty })}>
                        <select aria-label="Role" {...field} className={classNames({ hasValue: !!field.value })}>
                          {!field.value && <option value="">Select an option</option>}
                          <option value="Developer">Developer</option>
                          <option value="QA Analyst">QA Analyst</option>
                          <option value="Business Analyst">Business Analyst</option>
                        </select>

                        <span className="textFieldLabel">Role</span>

                        <div className="textFieldWrapperArrow">
                          <svg fill="none" viewBox="0 0 25 17">
                            <path strokeWidth="4" d="m2.37 2.26 10.5 11 10.5-11" />
                          </svg>
                        </div>
                      </label>

                      {hasError && <span className="formError">{errorMessage ?? 'There is an error on this field'}</span>}
                    </React.Fragment>
                  );
                }}
              />
            </div>

            <div className="formControl">
              <button className={classNames('formButton', { disabled: !formState.isValid, submitting: submissionStatus.isSubmitting })}>{submissionStatus.isSubmitting ? 'Submitting' : 'Request'}</button>
            </div>
          </form>
        )}

        {submissionStatus.isSubmitted && (
          <div className={classNames(styles.requestPageFormWrapper, styles.requestPageFormSuccessWrapper)}>
            <div className={styles.checkmark}>
              <svg viewBox="0 0 24 24">
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
            </div>
            <h1 className="dark">Thank You</h1>
            <h2 className="dark">Your request has been submitted</h2>
          </div>
        )}

        {!articleData.isLoading && !!articleData.data && (
          <ol className={styles.requestPageArticleList}>
            {articleData.data.map(item => {
              return (
                <li key={item.id}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ol>
        )}

        {articleData.isLoading && (
          <ol className={styles.requestPageArticleList}>
            <li>
              <Skeleton opacity={0.5} />
            </li>

            <li>
              <Skeleton opacity={0.5} />
            </li>

            <li>
              <Skeleton opacity={0.5} />
            </li>
          </ol>
        )}

        {!articleData.isLoading && !!articleData.error && (
          <div className={styles.requestPageArticleInfo}>
            <h2>{articleData.error}</h2>
          </div>
        )}
      </article>

      <Toast active={submissionStatus.hasSubmissionError} title="Something went wrong" message="We weren't able to submit your request. Please try again later" theme="error" onClose={() => setSubmissionStatus({ ...submissionStatus, hasSubmissionError: false })} />

      <div className={styles.blackBar} />
    </div>
  );
}

