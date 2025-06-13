// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

export class Speech extends APIResource {
  /**
   * Generates audio from the input text.
   *
   * @example
   * ```ts
   * const speech = await client.audio.speech.create({
   *   input: 'The quick brown fox jumped over the lazy dog',
   *   model: 'playai-tts',
   *   voice: 'Fritz-PlayAI',
   * });
   *
   * const content = await speech.blob();
   * console.log(content);
   * ```
   */
  create(body: SpeechCreateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/openai/v1/audio/speech', {
      body,
      ...options,
      headers: { Accept: 'audio/wav', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface SpeechCreateParams {
  /**
   * The text to generate audio for.
   */
  input: string;

  /**
   * One of the [available TTS models](/docs/text-to-speech).
   */
  model: (string & {}) | 'playai-tts' | 'playai-tts-arabic';

  /**
   * The voice to use when generating the audio. List of voices can be found
   * [here](/docs/text-to-speech).
   */
  voice: string;

  /**
   * The format of the generated audio. Supported formats are
   * `flac, mp3, mulaw, ogg, wav`.
   */
  response_format?: 'flac' | 'mp3' | 'mulaw' | 'ogg' | 'wav';

  /**
   * The sample rate for generated audio
   */
  sample_rate?: 8000 | 16000 | 22050 | 24000 | 32000 | 44100 | 48000;

  /**
   * The speed of the generated audio.
   */
  speed?: number;
}

export declare namespace Speech {
  export { type SpeechCreateParams as SpeechCreateParams };
}
