'use client'

import styles from './Contact.module.scss'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from 'react'
import Loader from './Loader'
import Success from './Success'
import Fail from './Fail'

export default function ContactForm({ t }: any) {
  const [sendingError, setSendingError] = useState(false)

  const schema = z.object({
  name: z
    .string()
    .min(2, t.contact.nameTooShort),
  phone: z
  .string()
  .transform((val) => val === "" ? undefined : val)
  .optional()
  .refine((val) => !val || /^[0-9+\s()-]{9,15}$/.test(val), {
    message: t.contact.invalidPhone,
  }),

  email: z
  .string()
  .nonempty(t.contact.noEmail)
  .email(t.contact.invalidEmail),
  message: z
  .string()
  .min(10, t.contact.messageTooShort),
})

type ContactFormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSendingError(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
  
      if (res.ok) {
        reset()
        setSendingError(false)
      } else {
        setSendingError(true)
      }
    } catch (err) {
      setSendingError(true)
    }
    reset()
  }

  const showLoader = isSubmitting
  const showSuccessInfo = isSubmitSuccessful && !isSubmitting && !sendingError
  const showErrorInfo = !isSubmitting && sendingError
  const showForm = !showSuccessInfo && !showErrorInfo && !showLoader

  return (
    <div>
      {showForm && (<form 
        onSubmit={handleSubmit(onSubmit)} 
        className={['space-y-4 mx-auto', styles['contact-form']].join(' ')}
      >
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">{t.contact.name}<span className={styles['required-star']}>*</span></label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full rounded px-3 py-2"
          />
          {errors.name && <p className={styles['error-text']}>{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="email">{t.contact.email}<span className={styles['required-star']}>*</span></label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded px-3 py-2"
          />
          {errors.email && <p className={styles['error-text']}>{errors.email.message}</p>}
        </div>


        <div>
          <label className="block mb-1 font-medium" htmlFor="email">{t.contact.phone}</label>
          <input
            id="phone"
            type="phone"
            {...register("phone")}
            className="w-full rounded px-3 py-2"
          />
          {errors.phone && <p className={styles['error-text']}>{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="message">{t.contact.message}<span className={styles['required-star']}>*</span></label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="w-full  rounded px-3 py-2"
          />
          {errors.message && <p className={styles['error-text']}>{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? t.contact.sending : t.contact.send}
        </button>
      </form>)}

      { showLoader && (
        <Loader t={t}/>
        )
      }

      { showSuccessInfo && (
        <Success t={t}/>
      )}

      { showErrorInfo && (
        <Fail t={t}/>
      )}
    </div>
  )
}

