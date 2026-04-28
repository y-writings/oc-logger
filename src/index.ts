import type { Event, Part, UserMessage } from "@opencode-ai/sdk"

export type PluginInput = {
  project: {
    id: string
  }
  directory: string
}

export type PluginOptions = Record<string, unknown>

export interface Hooks {
  event?: (input: { event: Event }) => Promise<void>
  "chat.message"?: (
    input: {
      sessionID: string
      agent?: string
      model?: { providerID: string; modelID: string }
      messageID?: string
      variant?: string
    },
    output: { message: UserMessage; parts: Part[] },
  ) => Promise<void>
}

export type Plugin = (input: PluginInput, options?: PluginOptions) => Promise<Hooks>
