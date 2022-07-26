import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BookCreateArgs>({
  book: {
    one: { data: { title: 'String', author: 'String', category: 'String' } },
    two: { data: { title: 'String', author: 'String', category: 'String' } },
  },
})

export type StandardScenario = typeof standard
