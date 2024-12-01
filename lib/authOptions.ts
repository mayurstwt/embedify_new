import {NextAuthOptions} from 'next-auth'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'


export const authOptions: NextAuthOptions = {
providers: [
    Github({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string
    }),
    Google({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string
    })
]
}