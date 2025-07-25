import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateQuestionRequest } from './types/create-question-request'
import type { CreateQuestionResponse } from './types/create-question-response'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ question }: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
        }
      )

      const responseJson: CreateQuestionResponse = await response.json()

      return responseJson
    },

    onMutate({ question }) {
      const previous = queryClient.getQueryData<GetRoomQuestionsResponse>([
        'get-room-questions',
        roomId,
      ])

      const questionsArray = previous?.questions ?? []

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-room-questions', roomId],
        {
          questions: [newQuestion, ...questionsArray],
        }
      )

      return { newQuestion, previous }
    },

    onSuccess: (data, _variables, context) => {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-room-questions', roomId],
        (previous) => {
          if (!previous) {
            return previous
          }

          if (!context.newQuestion) {
            return previous
          }

          return {
            questions: previous.questions.map((question) => {
              if (question.id === context.newQuestion.id) {
                return {
                  ...context.newQuestion,
                  id: data.questionId,
                  answer: data.answer,
                  isGeneratingAnswer: false,
                }
              }

              return question
            }),
          }
        }
      )
    },

    onError(_error, _variables, context) {
      if (context?.previous) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ['get-room-questions', roomId],
          {
            questions: context.previous.questions,
          }
        )
      }
    },
  })
}
