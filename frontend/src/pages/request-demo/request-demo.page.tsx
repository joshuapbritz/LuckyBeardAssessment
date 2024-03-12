import React, { useEffect, useState } from 'react';
import styles from './request-demo.module.css';
import classNames from 'classnames';
import { IArticle, IContactForm } from './request-demo.models';
import { request, IErrorResponse } from '../../library/api';
import { useForm, Controller } from 'react-hook-form';
import { Skeleton } from '../../components/skeleton/skeleton';

export function RequestDemoPage(): JSX.Element {
  const { control, handleSubmit, formState, reset } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [articleData, setArticleData] = useState<{ isLoading: boolean; data?: IArticle[]; error?: string }>({ isLoading: true });

  useEffect(() => {
    request<IArticle[]>(`http://localhost:3030/contact/articles`).then(articles => {
      if (articles instanceof IErrorResponse || !articles) {
        setArticleData({ isLoading: false, error: `Couldn't load articles` });
      } else setArticleData({ isLoading: false, data: articles });
    });
  }, []);

  async function requestDemo(body: IContactForm) {
    setIsSubmitting(true);

    const response = await request<IContactForm>(`http://localhost:3030/contact`, { method: 'POST', body });

    if (response instanceof IErrorResponse || !response) {
      // handle errors here
    } else if (!!response) {
      reset();
    }

    setIsSubmitting(false);
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
        <form className={classNames(styles.requestPageFormWrapper)} onSubmit={handleSubmit((values: any) => requestDemo(values))}>
          <h2 className="dark">Please fill your application</h2>

          <div className="formControl">
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Please enter your name' }}
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
              rules={{ required: 'Please enter your email' }}
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
              rules={{ required: 'Please enter a phone number' }}
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
              rules={{ required: 'Please enter your company' }}
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
                      <select {...field} className={classNames({ hasValue: !!field.value })}>
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
            <button className={classNames('formButton', { disabled: !formState.isValid, submitting: isSubmitting })}>{isSubmitting ? 'Submitting' : 'Request'}</button>
          </div>
        </form>

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

      <div className={styles.blackBar} />
    </div>
  );
}

