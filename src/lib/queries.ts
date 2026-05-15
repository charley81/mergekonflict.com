import { groq } from 'next-sanity'

export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]{
  artistName,
  heroTitle,
  heroTagline,
  heroBackground,
  aboutBio,
  socialLinks[]{
    platform,
    url,
    icon
  },
  soundcloudPlaylistUrl,
  soundcloudProfileUrl,
  footerCopyright
}`

export const SHOWS_QUERY = groq`*[_type == "show" && date >= now()] | order(date asc){
  _id,
  venue,
  date,
  timeSlot,
  ticketUrl
}`
