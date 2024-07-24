import type {
  AllowedComponentProps,
  ComponentCustomProps,
  ComponentOptionsMixin,
  ComputedOptions,
  DefineComponent,
  EmitsOptions,
  ExtractPropTypes,
  MethodOptions,
  VNodeProps,
} from 'vue'
import type { LeaferBaseEvent } from './LeaferEventType'

type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps

type _AnyRecord = Record<string, any>

export type LeaferVueComponent<
  P extends _AnyRecord = _AnyRecord,
> = DefineComponent<
  object,
  object,
  object,
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  EmitsOptions,
  string,
  PublicProps,
  Readonly<ExtractPropTypes<P & LeaferBaseEvent>>
>
