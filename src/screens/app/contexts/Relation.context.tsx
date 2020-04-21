import React, {
  FC,
  createContext,
  useMemo,
  useEffect,
  useState,
  useContext,
} from 'react'
import * as Sentry from 'sentry-expo'
import { getItem } from 'res/storage'
import { UsersContext } from './Users.context'

interface RelationContextProps {
  shareKeyModalOpen: boolean
  relation: Relation
  setShareKeyModal: (value: boolean) => void
  daysOfRelation: number
}

// @ts-ignore
const RelationContext = createContext<RelationContextProps>({})

const RelationContextProvider: FC = ({ children }) => {
  const [shareKeyModalOpen, setShareKeyModal] = useState<boolean>(false)
  const [relationSTate, setRelation] = useState<Relation>({
    id: null,
    code: null,
    createdAt: null,
  })
  const { relation } = useContext(UsersContext)

  useEffect(() => {
    const reHydrateData = async () => {
      const storedRelation = await getItem('relation')
      if (storedRelation) {
        Sentry.setContext('relation', storedRelation)
        setRelation(storedRelation)
      }
    }

    reHydrateData()
  }, [])

  useEffect(() => {
    if (relation) {
      Sentry.setContext('relation', relation)
      setRelation(relation)
    }
  }, [relation])

  const daysOfRelation = useMemo(() => {
    if (relationSTate.createdAt) {
      const now = new Date()
      const dateOfCreation = new Date(relationSTate.createdAt)
      const differenceInTime = now.getTime() - dateOfCreation.getTime()
      const differenceInDay = Math.round(differenceInTime / (1000 * 3600 * 24))
      return differenceInDay + 1
    }
    return 0
  }, [relationSTate])

  const relationContextApi = useMemo(
    () => ({
      shareKeyModalOpen,
      setShareKeyModal,
      relation: relationSTate,
      daysOfRelation,
    }),
    [relationSTate, shareKeyModalOpen, setShareKeyModal, daysOfRelation]
  )

  return (
    <RelationContext.Provider value={relationContextApi}>
      {children}
    </RelationContext.Provider>
  )
}

export { RelationContext, RelationContextProvider }
