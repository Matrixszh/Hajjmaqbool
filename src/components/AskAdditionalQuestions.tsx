import { useRef, useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { z } from 'zod'

type AskAdditionalQuestionsProps = {
  serviceId: string
  templateId: string
  publicKey: string
  className?: string
  onSuccess?: () => void
  onError?: (error: unknown) => void
}

const schema = z.object({
  user_name: z.string().min(2, 'Please enter a valid name'),
  user_email: z.string().email('Please enter a valid email'),
  question: z.string().min(10, 'Please provide at least 10 characters'),
})

type FormDataShape = z.infer<typeof schema>
type FieldErrors = Partial<Record<keyof FormDataShape, string>>

export default function AskAdditionalQuestions({
  serviceId,
  templateId,
  publicKey,
  className,
  onSuccess,
  onError,
}: AskAdditionalQuestionsProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)
    setSent(false)

    if (!formRef.current) return

    const fd = new FormData(formRef.current)
    const data: FormDataShape = {
      user_name: String(fd.get('user_name') ?? ''),
      user_email: String(fd.get('user_email') ?? ''),
      question: String(fd.get('question') ?? ''),
    }

    // Validate with Zod
    const result = schema.safeParse(data)
    if (!result.success) {
      const flat = result.error.flatten().fieldErrors
      const [nameErr] = flat.user_name ?? []
      const [emailErr] = flat.user_email ?? []
      const [questionErr] = flat.question ?? []
      setErrors({
        user_name: nameErr,
        user_email: emailErr,
        question: questionErr,
      })
      return
    }
    setErrors({})

    // Simple honeypot trap
    const trap = String(fd.get('website') ?? '')
    if (trap.trim().length > 0) return

    try {
      setSending(true)
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setSent(true)
      formRef.current.reset()
      onSuccess?.()
    } catch (err) {
      setSubmitError('Failed to send. Please try again.')
      onError?.(err)
    } finally {
      setSending(false)
    }
  }

  const inputBase =
    'block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400'

  return (
    <section className={['rounded-xl border border-gray-200 bg-white p-6 shadow-sm', className].filter(Boolean).join(' ')}>
      <h1 className="mb-1 text-2xl font-semibold text-gray-900">
        Ask Additional Questions
      </h1>
      <p className="mb-6 text-sm text-gray-600">
        Fill the form and a response will be sent via email.
      </p>

      <form ref={formRef} onSubmit={onSubmit} className="space-y-5" noValidate>
        {/* Honeypot field (hidden) */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="user_name" className="mb-1 block text-sm font-medium text-gray-700">
            Full name <span className="text-green-400">*</span>
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            className={`${inputBase} ${errors.user_name ? 'border-red-500 ring-2 ring-red-200' : ''}`}
            placeholder="John Doe"
            aria-invalid={!!errors.user_name}
          />
          {errors.user_name && (
            <p className="mt-1 text-xs text-red-600">{errors.user_name}</p>
          )}
        </div>

        <div>
          <label htmlFor="user_email" className="mb-1 block text-sm font-medium text-gray-700">
            Email <span className="text-green-400">*</span>
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            className={`${inputBase} ${errors.user_email ? 'border-red-500 ring-2 ring-red-200' : ''}`}
            placeholder="name@example.com"
            aria-invalid={!!errors.user_email}
          />
          {errors.user_email && (
            <p className="mt-1 text-xs text-red-600">{errors.user_email}</p>
          )}
        </div>

        <div>
          <label htmlFor="question" className="mb-1 block text-sm font-medium text-gray-700">
            Question <span className="text-green-400">*</span>
          </label>
          <textarea
            id="question"
            name="question"
            rows={5}
            className={`${inputBase} ${errors.question ? 'border-red-500 ring-2 ring-red-200' : ''}`}
            placeholder="Type the additional details or questions here..."
            aria-invalid={!!errors.question}
          />
          {errors.question && (
            <p className="mt-1 text-xs text-red-600">{errors.question}</p>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center rounded-md bg-green-400 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-60"
          >
            {sending ? 'Sending…' : 'Send'}
          </button>
        </div>

        {sent && (
          <p className="text-sm text-green-600">Thanks—your message was sent!</p>
        )}
        {submitError && (
          <p className="text-sm text-red-600">{submitError}</p>
        )}
      </form>
    </section>
  )
}
