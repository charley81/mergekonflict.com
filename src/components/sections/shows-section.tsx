import { client } from '@/sanity/lib/client'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

async function getShows() {
  const query = `*[_type == "show" && date >= now()] | order(date asc)`
  return await client.fetch(query)
}

export async function ShowsSection() {
  const shows = await getShows()

  return (
    <section id="shows" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-foreground">
          Upcoming Shows
        </h2>

        {shows.length === 0 ? (
          <p className="text-muted-foreground italic">No upcoming shows announced yet. Check back soon.</p>
        ) : (
          <div className="space-y-8">
            {shows.map((show: any, index: number) => {
              const date = new Date(show.date)
              const month = date.toLocaleString('default', { month: 'short' }).toUpperCase()
              const day = date.getDate()

              return (
                <div key={show._id}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center min-w-[60px]">
                        <div className="text-sm font-bold text-primary">{month}</div>
                        <div className="text-3xl font-black text-foreground">{day}</div>
                      </div>
                      <div>
                        <Link 
                          href={show.url} 
                          target="_blank" 
                          className="text-xl font-bold hover:text-primary transition-colors text-foreground"
                        >
                          {show.venue}
                        </Link>
                        <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                          {show.time}
                        </p>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="rounded-full md:w-auto w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link href={show.url} target="_blank">Tickets / Info</Link>
                    </Button>
                  </div>
                  {index < shows.length - 1 && <Separator className="bg-border" />}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
