import Mastodon, { MegalodonInstance } from './mastodon'
import StreamListener from './stream_listener'
import WebSocket from './web_socket'
import Response from './response'
import OAuth from './oauth'
/**
 * Entities
 */
import { Account } from './entities/account'
import { Application } from './entities/application'
import { Attachment } from './entities/attachment'
import { Card } from './entities/card'
import { Context } from './entities/context'
import { Conversation } from './entities/conversation'
import { Emoji } from './entities/emoji'
import { Field } from './entities/field'
import { Filter } from './entities/filter'
import { History } from './entities/history'
import { Instance } from './entities/instance'
import { List } from './entities/list'
import { Mention } from './entities/mention'
import { Notification } from './entities/notification'
import { PushSubscription } from './entities/push_subscription'
import { Relationship } from './entities/relationship'
import { Results } from './entities/results'
import { ScheduledStatus } from './entities/scheduled_status'
import { Source } from './entities/source'
import { Stats } from './entities/stats'
import { Status } from './entities/status'
import { StatusParams } from './entities/status_params'
import { Tag } from './entities/tag'
import { Token } from './entities/token'
import { URLs } from './entities/urls'

export {
  StreamListener,
  WebSocket,
  Response,
  OAuth,
  MegalodonInstance,
  /**
   * Entities
   */
  Account,
  Application,
  Attachment,
  Card,
  Context,
  Conversation,
  Emoji,
  Field,
  Filter,
  History,
  Instance,
  List,
  Mention,
  Notification,
  PushSubscription,
  Relationship,
  Results,
  ScheduledStatus,
  Source,
  Stats,
  Status,
  StatusParams,
  Tag,
  Token,
  URLs
}

export default Mastodon
