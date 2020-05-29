import { BaseConfig } from '../../../utils/base-config'

export interface ReleaseConfig extends BaseConfig {
  ci: boolean
  cwd: string
  dryRun: boolean
  allowIvy: boolean
  fix: boolean
  local?: boolean
  localUrl?: string
  version: string
}
