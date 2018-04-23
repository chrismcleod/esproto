import { eventstore } from '../lib/esproto';

// Outgoing
export const WRITE_EVENTS = 'WriteEvents';
export const TRANSACTION_START = 'TransactionStart';
export const TRANSACTION_WRITE = 'TransactionWrite';
export const TRANSACTION_COMMIT = 'TransactionCommit';
export const DELETE_STREAM = 'DeleteStream';
export const SUBSCRIBE_REPLICA = 'SubscribeReplica';
export const REPLICA_LOG_POSITION_ACK = 'ReplicaLogPositionAck';
export const READ_EVENT = 'ReadEvent';
export const READ_STREAM_EVENTS_FORWARD = 'ReadStreamEventsForward';
export const CREATE_CHUNK = 'CreateChunk';
export const READ_STREAM_EVENTS_BACKWARD = 'ReadStreamEventsBackward';
export const READ_ALL_EVENTS_FORWARD = 'ReadAllEventsForward';
export const READ_ALL_EVENTS_BACKWARD = 'ReadAllEventsBackward';
export const RAW_CHUNK_BULK = 'RawChunkBulk';
export const SUBSCRIBE_TO_STREAM = 'SubscribeToStream';
export const UNSUBSCRIBE_FROM_STREAM = 'UnsubscribeFromStream';
export const CONNECT_TO_PERSISTENT_SUBSCRIPTION = 'ConnectToPersistentSubscription';
export const HEARTBEAT_RESPONSE_COMMAND = 'HeartbeatResponseCommand';
export const CREATE_PERSISTENT_SUBSCRIPTION = 'CreatePersistentSubscription';
export const DELETE_PERSISTENT_SUBSCRIPTION = 'DeletePersistentSubscription';
export const PERSISTENT_SUBSCRIPTION_ACK_EVENTS = 'PersistentSubscriptionAckEvents';
export const PERSISTENT_SUBSCRIPTION_NAK_EVENTS = 'PersistentSubscriptionNakEvents';
export const UPDATE_PERSISTENT_SUBSCRIPTION = 'UpdatePersistentSubscription';
export const SCAVENGE_DATABASE = 'ScavengeDatabase';
export const REPLICA_SUBSCRIPTION_RETRY = 'ReplicaSubscriptionRetry';
export const AUTHENTICATE = 'Authenticate';
export const IDENTIFY_CLIENT = 'IdentifyClient';
export const PING = 'Ping';
export const PREPARE_ACK = 'PrepareAck';
export const COMMIT_ACK = 'CommitAck';
export const SLAVE_ASSIGNMENT = 'SlaveAssignment';
export const CLONE_ASSIGNMENT = 'CloneAssignment';

// Incoming
export const HEARTBEAT_REQUEST_COMMAND = 'HeartbeatRequestCommand' as 'HeartbeatRequestCommand';
export const WRITE_EVENTS_COMPLETED = 'WriteEventsCompleted' as 'WriteEventsCompleted';
export const TRANSACTION_START_COMPLETED = 'TransactionStartCompleted' as 'TransactionStartCompleted';
export const TRANSACTION_WRITE_COMPLETED = 'TransactionWriteCompleted' as 'TransactionWriteCompleted';
export const TRANSACTION_COMMIT_COMPLETED = 'TransactionCommitCompleted' as 'TransactionCommitCompleted';
export const DELETE_STREAM_COMPLETED = 'DeleteStreamCompleted' as 'DeleteStreamCompleted';
export const READ_EVENT_COMPLETED = 'ReadEventCompleted' as 'ReadEventCompleted';
export const READ_STREAM_EVENTS_FORWARD_COMPLETED = 'ReadStreamEventsForwardCompleted' as 'ReadStreamEventsForwardCompleted';
export const READ_STREAM_EVENTS_BACKWARD_COMPLETED = 'ReadStreamEventsBackwardCompleted' as 'ReadStreamEventsBackwardCompleted';
export const READ_ALL_EVENTS_FORWARD_COMPLETED = 'ReadAllEventsForwardCompleted' as 'ReadAllEventsForwardCompleted';
export const READ_ALL_EVENTS_BACKWARD_COMPLETED = 'ReadAllEventsBackwardCompleted' as 'ReadAllEventsBackwardCompleted';
export const SUBSCRIPTION_CONFIRMATION = 'SubscriptionConfirmation' as 'SubscriptionConfirmation';
export const STREAM_EVENT_APPEARED = 'StreamEventAppeared' as 'StreamEventAppeared';
export const SUBSCRIPTION_DROPPED = 'SubscriptionDropped' as 'SubscriptionDropped';
export const PERSISTENT_SUBSCRIPTION_CONFIRMATION = 'PersistentSubscriptionConfirmation' as 'PersistentSubscriptionConfirmation';
export const PERSISTENT_SUBSCRIPTION_STREAM_EVENT_APPEARED = 'PersistentSubscriptionStreamEventAppeared' as 'PersistentSubscriptionStreamEventAppeared';
export const DATA_CHUNK_BULK = 'DataChunkBulk' as 'DataChunkBulk';
export const CREATE_PERSISTENT_SUBSCRIPTION_COMPLETED = 'CreatePersistentSubscriptionCompleted' as 'CreatePersistentSubscriptionCompleted';
export const DELETE_PERSISTENT_SUBSCRIPTION_COMPLETED = 'DeletePersistentSubscriptionCompleted' as 'DeletePersistentSubscriptionCompleted';
export const UPDATE_PERSISTENT_SUBSCRIPTION_COMPLETED = 'UpdatePersistentSubscriptionCompleted' as 'UpdatePersistentSubscriptionCompleted';
export const SCAVENGE_DATABASE_COMPLETED = 'ScavengeDatabaseCompleted' as 'ScavengeDatabaseCompleted';
export const REPLICA_SUBSCRIBED = 'ReplicaSubscribed' as 'ReplicaSubscribed';
export const BAD_REQUEST = 'BadRequest' as 'BadRequest';
export const NOT_HANDLED = 'NotHandled' as 'NotHandled';
export const AUTHENTICATED = 'Authenticated' as 'Authenticated';
export const NOT_AUTHENTICATED = 'NotAuthenticated' as 'NotAuthenticated';
export const CLIENT_IDENTIFIED = 'ClientIdentified' as 'ClientIdentified';
export const PONG = 'Pong' as 'Pong';

export interface Decoder {
  decode: (buffer: Buffer) => any;
}

export interface Encoder {
  encode: (data: any) => {
    finish: () => Uint8Array;
  };
}

const noDecoder = {
  decode: (buffer: Buffer) => {
    try {
      return buffer.toString('utf8');
    } catch {
      return buffer;
    }
  },
};

const noEncoder = {
  encode: (_data: any) => ({ finish: () => Buffer.alloc(0) }),
};

export const incoming: Decoder[] = [];
incoming[ 1 ] = noDecoder;
incoming[ 131 ] = eventstore.proto.WriteEventsCompleted;
incoming[ 133 ] = eventstore.proto.TransactionStartCompleted;
incoming[ 135 ] = eventstore.proto.TransactionWriteCompleted;
incoming[ 137 ] = eventstore.proto.TransactionCommitCompleted;
incoming[ 139 ] = eventstore.proto.DeleteStreamCompleted;
incoming[ 177 ] = eventstore.proto.ReadEventCompleted;
incoming[ 179 ] = eventstore.proto.ReadStreamEventsCompleted;
incoming[ 181 ] = eventstore.proto.ReadStreamEventsCompleted;
incoming[ 183 ] = eventstore.proto.ReadAllEventsCompleted;
incoming[ 185 ] = eventstore.proto.ReadAllEventsCompleted;
incoming[ 193 ] = eventstore.proto.SubscriptionConfirmation;
incoming[ 194 ] = eventstore.proto.StreamEventAppeared;
incoming[ 196 ] = eventstore.proto.SubscriptionDropped;
incoming[ 198 ] = eventstore.proto.PersistentSubscriptionConfirmation;
incoming[ 199 ] = eventstore.proto.PersistentSubscriptionStreamEventAppeared;
incoming[ 20 ] = noDecoder;
incoming[ 201 ] = eventstore.proto.CreatePersistentSubscriptionCompleted;
incoming[ 203 ] = eventstore.proto.DeletePersistentSubscriptionCompleted;
incoming[ 207 ] = eventstore.proto.UpdatePersistentSubscriptionCompleted;
incoming[ 209 ] = eventstore.proto.ScavengeDatabaseCompleted;
incoming[ 22 ] = noDecoder;
incoming[ 240 ] = noDecoder;
incoming[ 241 ] = eventstore.proto.NotHandled;
incoming[ 243 ] = noDecoder;
incoming[ 244 ] = noDecoder;
incoming[ 246 ] = eventstore.proto.ClientIdentified;
incoming[ 4 ] = noDecoder;

export const outgoing: Encoder[] = [];
outgoing[ 130 ] = eventstore.proto.WriteEvents;
outgoing[ 132 ] = eventstore.proto.TransactionStart;
outgoing[ 134 ] = eventstore.proto.TransactionWrite;
outgoing[ 136 ] = eventstore.proto.TransactionCommit;
outgoing[ 138 ] = eventstore.proto.DeleteStream;
outgoing[ 16 ] = noEncoder;
outgoing[ 17 ] = noEncoder;
outgoing[ 176 ] = eventstore.proto.ReadEvent;
outgoing[ 178 ] = eventstore.proto.ReadStreamEvents;
outgoing[ 18 ] = noEncoder;
outgoing[ 180 ] = eventstore.proto.ReadStreamEvents;
outgoing[ 182 ] = eventstore.proto.ReadAllEvents;
outgoing[ 184 ] = eventstore.proto.ReadAllEvents;
outgoing[ 19 ] = noEncoder;
outgoing[ 192 ] = eventstore.proto.SubscribeToStream;
outgoing[ 195 ] = eventstore.proto.UnsubscribeFromStream;
outgoing[ 197 ] = eventstore.proto.ConnectToPersistentSubscription;
outgoing[ 2 ] = noEncoder;
outgoing[ 200 ] = eventstore.proto.CreatePersistentSubscription;
outgoing[ 202 ] = eventstore.proto.DeletePersistentSubscription;
outgoing[ 204 ] = eventstore.proto.PersistentSubscriptionAckEvents;
outgoing[ 205 ] = eventstore.proto.PersistentSubscriptionNakEvents;
outgoing[ 206 ] = eventstore.proto.UpdatePersistentSubscription;
outgoing[ 208 ] = eventstore.proto.ScavengeDatabase;
outgoing[ 21 ] = noEncoder;
outgoing[ 242 ] = noEncoder;
outgoing[ 245 ] = eventstore.proto.IdentifyClient;
outgoing[ 3 ] = noEncoder;
outgoing[ 5 ] = noEncoder;
outgoing[ 6 ] = noEncoder;
outgoing[ 7 ] = noEncoder;
outgoing[ 8 ] = noEncoder;

export const labels: string[] = [];
labels[ 1 ] = HEARTBEAT_REQUEST_COMMAND as typeof HEARTBEAT_REQUEST_COMMAND;
labels[ 130 ] = WRITE_EVENTS as typeof WRITE_EVENTS;
labels[ 131 ] = WRITE_EVENTS_COMPLETED as typeof WRITE_EVENTS_COMPLETED;
labels[ 132 ] = TRANSACTION_START as typeof TRANSACTION_START;
labels[ 133 ] = TRANSACTION_START_COMPLETED as typeof TRANSACTION_START_COMPLETED;
labels[ 134 ] = TRANSACTION_WRITE as typeof TRANSACTION_WRITE;
labels[ 135 ] = TRANSACTION_WRITE_COMPLETED as typeof TRANSACTION_WRITE_COMPLETED;
labels[ 136 ] = TRANSACTION_COMMIT as typeof TRANSACTION_COMMIT;
labels[ 137 ] = TRANSACTION_COMMIT_COMPLETED as typeof TRANSACTION_COMMIT_COMPLETED;
labels[ 138 ] = DELETE_STREAM as typeof DELETE_STREAM;
labels[ 139 ] = DELETE_STREAM_COMPLETED as typeof DELETE_STREAM_COMPLETED;
labels[ 16 ] = SUBSCRIBE_REPLICA as typeof SUBSCRIBE_REPLICA;
labels[ 17 ] = REPLICA_LOG_POSITION_ACK as typeof REPLICA_LOG_POSITION_ACK;
labels[ 176 ] = READ_EVENT as typeof READ_EVENT;
labels[ 177 ] = READ_EVENT_COMPLETED as typeof READ_EVENT_COMPLETED;
labels[ 178 ] = READ_STREAM_EVENTS_FORWARD as typeof READ_STREAM_EVENTS_FORWARD;
labels[ 179 ] = READ_STREAM_EVENTS_FORWARD_COMPLETED as typeof READ_STREAM_EVENTS_FORWARD_COMPLETED;
labels[ 18 ] = CREATE_CHUNK as typeof CREATE_CHUNK;
labels[ 180 ] = READ_STREAM_EVENTS_BACKWARD as typeof READ_STREAM_EVENTS_BACKWARD;
labels[ 181 ] = READ_STREAM_EVENTS_BACKWARD_COMPLETED as typeof READ_STREAM_EVENTS_BACKWARD_COMPLETED;
labels[ 182 ] = READ_ALL_EVENTS_FORWARD as typeof READ_ALL_EVENTS_FORWARD;
labels[ 183 ] = READ_ALL_EVENTS_FORWARD_COMPLETED as typeof READ_ALL_EVENTS_FORWARD_COMPLETED;
labels[ 184 ] = READ_ALL_EVENTS_BACKWARD as typeof READ_ALL_EVENTS_BACKWARD;
labels[ 185 ] = READ_ALL_EVENTS_BACKWARD_COMPLETED as typeof READ_ALL_EVENTS_BACKWARD_COMPLETED;
labels[ 19 ] = RAW_CHUNK_BULK as typeof RAW_CHUNK_BULK;
labels[ 192 ] = SUBSCRIBE_TO_STREAM as typeof SUBSCRIBE_TO_STREAM;
labels[ 193 ] = SUBSCRIPTION_CONFIRMATION as typeof SUBSCRIPTION_CONFIRMATION;
labels[ 194 ] = STREAM_EVENT_APPEARED as typeof STREAM_EVENT_APPEARED;
labels[ 195 ] = UNSUBSCRIBE_FROM_STREAM as typeof UNSUBSCRIBE_FROM_STREAM;
labels[ 196 ] = SUBSCRIPTION_DROPPED as typeof SUBSCRIPTION_DROPPED;
labels[ 197 ] = CONNECT_TO_PERSISTENT_SUBSCRIPTION as typeof CONNECT_TO_PERSISTENT_SUBSCRIPTION;
labels[ 198 ] = PERSISTENT_SUBSCRIPTION_CONFIRMATION as typeof PERSISTENT_SUBSCRIPTION_CONFIRMATION;
labels[ 199 ] = PERSISTENT_SUBSCRIPTION_STREAM_EVENT_APPEARED as typeof PERSISTENT_SUBSCRIPTION_STREAM_EVENT_APPEARED;
labels[ 2 ] = HEARTBEAT_RESPONSE_COMMAND as typeof HEARTBEAT_RESPONSE_COMMAND;
labels[ 20 ] = DATA_CHUNK_BULK as typeof DATA_CHUNK_BULK;
labels[ 200 ] = CREATE_PERSISTENT_SUBSCRIPTION as typeof CREATE_PERSISTENT_SUBSCRIPTION;
labels[ 201 ] = CREATE_PERSISTENT_SUBSCRIPTION_COMPLETED as typeof CREATE_PERSISTENT_SUBSCRIPTION_COMPLETED;
labels[ 202 ] = DELETE_PERSISTENT_SUBSCRIPTION as typeof DELETE_PERSISTENT_SUBSCRIPTION;
labels[ 203 ] = DELETE_PERSISTENT_SUBSCRIPTION_COMPLETED as typeof DELETE_PERSISTENT_SUBSCRIPTION_COMPLETED;
labels[ 204 ] = PERSISTENT_SUBSCRIPTION_ACK_EVENTS as typeof PERSISTENT_SUBSCRIPTION_ACK_EVENTS;
labels[ 205 ] = PERSISTENT_SUBSCRIPTION_NAK_EVENTS as typeof PERSISTENT_SUBSCRIPTION_NAK_EVENTS;
labels[ 206 ] = UPDATE_PERSISTENT_SUBSCRIPTION as typeof UPDATE_PERSISTENT_SUBSCRIPTION;
labels[ 207 ] = UPDATE_PERSISTENT_SUBSCRIPTION_COMPLETED as typeof UPDATE_PERSISTENT_SUBSCRIPTION_COMPLETED;
labels[ 208 ] = SCAVENGE_DATABASE as typeof SCAVENGE_DATABASE;
labels[ 209 ] = SCAVENGE_DATABASE_COMPLETED as typeof SCAVENGE_DATABASE_COMPLETED;
labels[ 21 ] = REPLICA_SUBSCRIPTION_RETRY as typeof REPLICA_SUBSCRIPTION_RETRY;
labels[ 22 ] = REPLICA_SUBSCRIBED as typeof REPLICA_SUBSCRIBED;
labels[ 240 ] = BAD_REQUEST as typeof BAD_REQUEST;
labels[ 241 ] = NOT_HANDLED as typeof NOT_HANDLED;
labels[ 242 ] = AUTHENTICATE as typeof AUTHENTICATE;
labels[ 243 ] = AUTHENTICATED as typeof AUTHENTICATED;
labels[ 244 ] = NOT_AUTHENTICATED as typeof NOT_AUTHENTICATED;
labels[ 245 ] = IDENTIFY_CLIENT as typeof IDENTIFY_CLIENT;
labels[ 246 ] = CLIENT_IDENTIFIED as typeof CLIENT_IDENTIFIED;
labels[ 3 ] = PING as typeof PING;
labels[ 4 ] = PONG as typeof PONG;
labels[ 5 ] = PREPARE_ACK as typeof PREPARE_ACK;
labels[ 6 ] = COMMIT_ACK as typeof COMMIT_ACK;
labels[ 7 ] = SLAVE_ASSIGNMENT as typeof SLAVE_ASSIGNMENT;
labels[ 8 ] = CLONE_ASSIGNMENT as typeof CLONE_ASSIGNMENT;

export const lookupCode = (name: string) => {
  const index = labels.findIndex(command => command === name);
  return index;
};
