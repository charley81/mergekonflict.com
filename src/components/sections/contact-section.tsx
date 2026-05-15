'use client'

import * as React from 'react'
import { useActionState } from 'react'
import { submitContact } from '@/server-actions/submit-contact'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const initialState = {
  success: false,
  message: '',
  errors: {} as Record<string, string[]>,
}

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState)
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    if (state.success) {
      toast.success(state.message)
      formRef.current?.reset()
    } else if (state.message && !state.success) {
      toast.error(state.message)
    }
  }, [state])

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">
            Contact
          </h2>
          <p className="text-muted-foreground">
            For bookings, remixes, or general inquiries, drop me a message below.
          </p>
        </div>

        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              required
              disabled={isPending}
              className="bg-secondary/50 border-border"
            />
            {state.errors?.name && (
              <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              disabled={isPending}
              className="bg-secondary/50 border-border"
            />
            {state.errors?.email && (
              <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              disabled={isPending}
              className="bg-secondary/50 border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
              disabled={isPending}
              className="min-h-[150px] bg-secondary/50 border-border"
            />
            {state.errors?.message && (
              <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isPending}
          >
            {isPending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}
