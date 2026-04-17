'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RESTAURANT_CONFIG } from '@/lib/config'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  party: string
  notes: string
}

const TIME_SLOTS = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM',
]

const PARTY_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8+']

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', date: '', time: '', party: '2', notes: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  function validate(): boolean {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.date) e.date = 'Date is required'
    if (!form.time) e.time = 'Time is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  function handleClose() {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', date: '', time: '', party: '2', notes: '' })
      setErrors({})
    }, 400)
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-transparent border-b py-3 text-cream font-sans text-sm placeholder-cream/40 outline-none transition-colors duration-200 focus:border-saffron ${errors[field] ? 'border-pomegranate/80' : 'border-cream/20 hover:border-cream/40'
    }`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && handleClose()}
          >
            <motion.div
              className="relative w-full max-w-xl bg-charcoal-light border border-cream/10 overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold top bar */}
              <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />

              <div className="p-8 sm:p-10">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-6 text-cream/40 hover:text-cream transition-colors text-2xl leading-none"
                  aria-label="Close reservation form"
                >
                  ×
                </button>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="section-label mb-3">Reservations</p>
                      <h2 className="font-serif text-3xl font-light text-cream mb-1">
                        Join Us for Dinner
                      </h2>
                      <p className="font-sans text-sm text-cream/50 mb-8">
                        Or call us at{' '}
                        <a
                          href={`tel:${RESTAURANT_CONFIG.contact.phone}`}
                          className="text-saffron hover:underline"
                        >
                          {RESTAURANT_CONFIG.contact.phone}
                        </a>
                      </p>

                      <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                          {/* Name */}
                          <div className="sm:col-span-2">
                            <input
                              name="name"
                              type="text"
                              placeholder="Full Name *"
                              value={form.name}
                              onChange={handleChange}
                              className={inputClass('name')}
                              autoComplete="name"
                            />
                            {errors.name && (
                              <p className="text-xs text-pomegranate mt-1">{errors.name}</p>
                            )}
                          </div>

                          {/* Email */}
                          <div>
                            <input
                              name="email"
                              type="email"
                              placeholder="Email Address *"
                              value={form.email}
                              onChange={handleChange}
                              className={inputClass('email')}
                              autoComplete="email"
                            />
                            {errors.email && (
                              <p className="text-xs text-pomegranate mt-1">{errors.email}</p>
                            )}
                          </div>

                          {/* Phone */}
                          <div>
                            <input
                              name="phone"
                              type="tel"
                              placeholder="Phone Number"
                              value={form.phone}
                              onChange={handleChange}
                              className={inputClass('phone')}
                              autoComplete="tel"
                            />
                          </div>

                          {/* Date */}
                          <div>
                            <input
                              name="date"
                              type="date"
                              min={today}
                              value={form.date}
                              onChange={handleChange}
                              className={`${inputClass('date')} [color-scheme:dark]`}
                            />
                            {errors.date && (
                              <p className="text-xs text-pomegranate mt-1">{errors.date}</p>
                            )}
                          </div>

                          {/* Time */}
                          <div>
                            <select
                              name="time"
                              value={form.time}
                              onChange={handleChange}
                              className={`${inputClass('time')} cursor-pointer bg-charcoal-light`}
                            >
                              <option value="" disabled>
                                Select Time *
                              </option>
                              {TIME_SLOTS.map((t) => (
                                <option key={t} value={t} className="bg-charcoal-light">
                                  {t}
                                </option>
                              ))}
                            </select>
                            {errors.time && (
                              <p className="text-xs text-pomegranate mt-1">{errors.time}</p>
                            )}
                          </div>

                          {/* Party size */}
                          <div className="sm:col-span-2">
                            <label className="block text-xs tracking-widest uppercase text-cream/40 mb-3">
                              Party Size
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {PARTY_SIZES.map((size) => (
                                <button
                                  key={size}
                                  type="button"
                                  onClick={() => setForm((p) => ({ ...p, party: size }))}
                                  className={`min-w-[44px] h-11 px-3 text-sm font-sans border transition-all duration-200 ${form.party === size
                                      ? 'border-saffron bg-saffron/10 text-saffron'
                                      : 'border-cream/15 text-cream/50 hover:border-cream/40 hover:text-cream'
                                    }`}
                                >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Notes */}
                          <div className="sm:col-span-2">
                            <textarea
                              name="notes"
                              placeholder="Special requests or dietary notes"
                              value={form.notes}
                              onChange={handleChange}
                              rows={2}
                              className={`${inputClass('notes')} resize-none`}
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary w-full mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                              Confirming…
                            </span>
                          ) : (
                            'Request Reservation'
                          )}
                        </button>

                        <p className="text-xs text-cream/30 text-center mt-4">
                          We will confirm your reservation by email within 2 hours. | This form is for preview purposes only.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 border border-saffron/40 flex items-center justify-center">
                        <svg className="w-7 h-7 text-saffron" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="section-label mb-3">Reservation Received</p>
                      <h2 className="font-serif text-3xl font-light text-cream mb-4">
                        Thank you, {form.name.split(' ')[0]}.
                      </h2>
                      <p className="font-sans text-sm text-cream/60 max-w-xs mx-auto mb-8">
                        We have received your request for{' '}
                        <span className="text-cream">{form.party} guest{form.party !== '1' ? 's' : ''}</span>{' '}
                        on <span className="text-cream">{form.date}</span> at{' '}
                        <span className="text-cream">{form.time}</span>. A confirmation will follow shortly.
                      </p>
                      <button onClick={handleClose} className="btn-outline-light">
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
