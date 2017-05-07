/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.eventstore = (function() {

    /**
     * Namespace eventstore.
     * @exports eventstore
     * @namespace
     */
    var eventstore = {};

    eventstore.proto = (function() {

        /**
         * Namespace proto.
         * @exports eventstore.proto
         * @namespace
         */
        var proto = {};

        /**
         * OperationResult enum.
         * @name OperationResult
         * @memberof eventstore.proto
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} PrepareTimeout=1 PrepareTimeout value
         * @property {number} CommitTimeout=2 CommitTimeout value
         * @property {number} ForwardTimeout=3 ForwardTimeout value
         * @property {number} WrongExpectedVersion=4 WrongExpectedVersion value
         * @property {number} StreamDeleted=5 StreamDeleted value
         * @property {number} InvalidTransaction=6 InvalidTransaction value
         * @property {number} AccessDenied=7 AccessDenied value
         */
        proto.OperationResult = (function() {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "PrepareTimeout"] = 1;
            values[valuesById[2] = "CommitTimeout"] = 2;
            values[valuesById[3] = "ForwardTimeout"] = 3;
            values[valuesById[4] = "WrongExpectedVersion"] = 4;
            values[valuesById[5] = "StreamDeleted"] = 5;
            values[valuesById[6] = "InvalidTransaction"] = 6;
            values[valuesById[7] = "AccessDenied"] = 7;
            return values;
        })();

        proto.NewEvent = (function() {

            /**
             * Properties of a NewEvent.
             * @typedef eventstore.proto.NewEvent$Properties
             * @type {Object}
             * @property {Uint8Array} eventId NewEvent eventId.
             * @property {string} eventType NewEvent eventType.
             * @property {number} dataContentType NewEvent dataContentType.
             * @property {number} metadataContentType NewEvent metadataContentType.
             * @property {Uint8Array} data NewEvent data.
             * @property {Uint8Array} [metadata] NewEvent metadata.
             */

            /**
             * Constructs a new NewEvent.
             * @exports eventstore.proto.NewEvent
             * @constructor
             * @param {eventstore.proto.NewEvent$Properties=} [properties] Properties to set
             */
            function NewEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NewEvent eventId.
             * @type {Uint8Array}
             */
            NewEvent.prototype.eventId = $util.newBuffer([]);

            /**
             * NewEvent eventType.
             * @type {string}
             */
            NewEvent.prototype.eventType = "";

            /**
             * NewEvent dataContentType.
             * @type {number}
             */
            NewEvent.prototype.dataContentType = 0;

            /**
             * NewEvent metadataContentType.
             * @type {number}
             */
            NewEvent.prototype.metadataContentType = 0;

            /**
             * NewEvent data.
             * @type {Uint8Array}
             */
            NewEvent.prototype.data = $util.newBuffer([]);

            /**
             * NewEvent metadata.
             * @type {Uint8Array}
             */
            NewEvent.prototype.metadata = $util.newBuffer([]);

            /**
             * Creates a new NewEvent instance using the specified properties.
             * @param {eventstore.proto.NewEvent$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.NewEvent} NewEvent instance
             */
            NewEvent.create = function create(properties) {
                return new NewEvent(properties);
            };

            /**
             * Encodes the specified NewEvent message. Does not implicitly {@link eventstore.proto.NewEvent.verify|verify} messages.
             * @param {eventstore.proto.NewEvent$Properties} message NewEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.eventType);
                writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.dataContentType);
                writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.metadataContentType);
                writer.uint32( /* id 5, wireType 2 =*/ 42).bytes(message.data);
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    writer.uint32( /* id 6, wireType 2 =*/ 50).bytes(message.metadata);
                return writer;
            };

            /**
             * Encodes the specified NewEvent message, length delimited. Does not implicitly {@link eventstore.proto.NewEvent.verify|verify} messages.
             * @param {eventstore.proto.NewEvent$Properties} message NewEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NewEvent message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.NewEvent} NewEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.NewEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.eventId = reader.bytes();
                            break;
                        case 2:
                            message.eventType = reader.string();
                            break;
                        case 3:
                            message.dataContentType = reader.int32();
                            break;
                        case 4:
                            message.metadataContentType = reader.int32();
                            break;
                        case 5:
                            message.data = reader.bytes();
                            break;
                        case 6:
                            message.metadata = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("eventId"))
                    throw $util.ProtocolError("missing required 'eventId'", { instance: message });
                if (!message.hasOwnProperty("eventType"))
                    throw $util.ProtocolError("missing required 'eventType'", { instance: message });
                if (!message.hasOwnProperty("dataContentType"))
                    throw $util.ProtocolError("missing required 'dataContentType'", { instance: message });
                if (!message.hasOwnProperty("metadataContentType"))
                    throw $util.ProtocolError("missing required 'metadataContentType'", { instance: message });
                if (!message.hasOwnProperty("data"))
                    throw $util.ProtocolError("missing required 'data'", { instance: message });
                return message;
            };

            /**
             * Decodes a NewEvent message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.NewEvent} NewEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NewEvent message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            NewEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!(message.eventId && typeof message.eventId.length === "number" || $util.isString(message.eventId)))
                    return "eventId: buffer expected";
                if (!$util.isString(message.eventType))
                    return "eventType: string expected";
                if (!$util.isInteger(message.dataContentType))
                    return "dataContentType: integer expected";
                if (!$util.isInteger(message.metadataContentType))
                    return "metadataContentType: integer expected";
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    if (!(message.metadata && typeof message.metadata.length === "number" || $util.isString(message.metadata)))
                        return "metadata: buffer expected";
                return null;
            };

            /**
             * Creates a NewEvent message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.NewEvent} NewEvent
             */
            NewEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.NewEvent)
                    return object;
                var message = new $root.eventstore.proto.NewEvent();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, message.eventId = $util.newBuffer($util.base64.length(object.eventId)), 0);
                    else if (object.eventId.length)
                    message.eventId = object.eventId;
                if (object.eventType != null)
                    message.eventType = String(object.eventType);
                if (object.dataContentType != null)
                    message.dataContentType = object.dataContentType | 0;
                if (object.metadataContentType != null)
                    message.metadataContentType = object.metadataContentType | 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                    message.data = object.data;
                if (object.metadata != null)
                    if (typeof object.metadata === "string")
                        $util.base64.decode(object.metadata, message.metadata = $util.newBuffer($util.base64.length(object.metadata)), 0);
                    else if (object.metadata.length)
                    message.metadata = object.metadata;
                return message;
            };

            /**
             * Creates a NewEvent message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.NewEvent.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.NewEvent} NewEvent
             */
            NewEvent.from = NewEvent.fromObject;

            /**
             * Creates a plain object from a NewEvent message. Also converts values to other types if specified.
             * @param {eventstore.proto.NewEvent} message NewEvent
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NewEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.eventId = options.bytes === String ? "" : [];
                    object.eventType = "";
                    object.dataContentType = 0;
                    object.metadataContentType = 0;
                    object.data = options.bytes === String ? "" : [];
                    object.metadata = options.bytes === String ? "" : [];
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId = options.bytes === String ? $util.base64.encode(message.eventId, 0, message.eventId.length) : options.bytes === Array ? Array.prototype.slice.call(message.eventId) : message.eventId;
                if (message.eventType != null && message.hasOwnProperty("eventType"))
                    object.eventType = message.eventType;
                if (message.dataContentType != null && message.hasOwnProperty("dataContentType"))
                    object.dataContentType = message.dataContentType;
                if (message.metadataContentType != null && message.hasOwnProperty("metadataContentType"))
                    object.metadataContentType = message.metadataContentType;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    object.metadata = options.bytes === String ? $util.base64.encode(message.metadata, 0, message.metadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.metadata) : message.metadata;
                return object;
            };

            /**
             * Creates a plain object from this NewEvent message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NewEvent.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this NewEvent to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            NewEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return NewEvent;
        })();

        proto.EventRecord = (function() {

            /**
             * Properties of an EventRecord.
             * @typedef eventstore.proto.EventRecord$Properties
             * @type {Object}
             * @property {string} eventStreamId EventRecord eventStreamId.
             * @property {number} eventNumber EventRecord eventNumber.
             * @property {Uint8Array} eventId EventRecord eventId.
             * @property {string} eventType EventRecord eventType.
             * @property {number} dataContentType EventRecord dataContentType.
             * @property {number} metadataContentType EventRecord metadataContentType.
             * @property {Uint8Array} data EventRecord data.
             * @property {Uint8Array} [metadata] EventRecord metadata.
             * @property {number|Long} [created] EventRecord created.
             * @property {number|Long} [createdEpoch] EventRecord createdEpoch.
             */

            /**
             * Constructs a new EventRecord.
             * @exports eventstore.proto.EventRecord
             * @constructor
             * @param {eventstore.proto.EventRecord$Properties=} [properties] Properties to set
             */
            function EventRecord(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EventRecord eventStreamId.
             * @type {string}
             */
            EventRecord.prototype.eventStreamId = "";

            /**
             * EventRecord eventNumber.
             * @type {number}
             */
            EventRecord.prototype.eventNumber = 0;

            /**
             * EventRecord eventId.
             * @type {Uint8Array}
             */
            EventRecord.prototype.eventId = $util.newBuffer([]);

            /**
             * EventRecord eventType.
             * @type {string}
             */
            EventRecord.prototype.eventType = "";

            /**
             * EventRecord dataContentType.
             * @type {number}
             */
            EventRecord.prototype.dataContentType = 0;

            /**
             * EventRecord metadataContentType.
             * @type {number}
             */
            EventRecord.prototype.metadataContentType = 0;

            /**
             * EventRecord data.
             * @type {Uint8Array}
             */
            EventRecord.prototype.data = $util.newBuffer([]);

            /**
             * EventRecord metadata.
             * @type {Uint8Array}
             */
            EventRecord.prototype.metadata = $util.newBuffer([]);

            /**
             * EventRecord created.
             * @type {number|Long}
             */
            EventRecord.prototype.created = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * EventRecord createdEpoch.
             * @type {number|Long}
             */
            EventRecord.prototype.createdEpoch = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * Creates a new EventRecord instance using the specified properties.
             * @param {eventstore.proto.EventRecord$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.EventRecord} EventRecord instance
             */
            EventRecord.create = function create(properties) {
                return new EventRecord(properties);
            };

            /**
             * Encodes the specified EventRecord message. Does not implicitly {@link eventstore.proto.EventRecord.verify|verify} messages.
             * @param {eventstore.proto.EventRecord$Properties} message EventRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventRecord.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.eventStreamId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.eventNumber);
                writer.uint32( /* id 3, wireType 2 =*/ 26).bytes(message.eventId);
                writer.uint32( /* id 4, wireType 2 =*/ 34).string(message.eventType);
                writer.uint32( /* id 5, wireType 0 =*/ 40).int32(message.dataContentType);
                writer.uint32( /* id 6, wireType 0 =*/ 48).int32(message.metadataContentType);
                writer.uint32( /* id 7, wireType 2 =*/ 58).bytes(message.data);
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    writer.uint32( /* id 8, wireType 2 =*/ 66).bytes(message.metadata);
                if (message.created != null && message.hasOwnProperty("created"))
                    writer.uint32( /* id 9, wireType 0 =*/ 72).int64(message.created);
                if (message.createdEpoch != null && message.hasOwnProperty("createdEpoch"))
                    writer.uint32( /* id 10, wireType 0 =*/ 80).int64(message.createdEpoch);
                return writer;
            };

            /**
             * Encodes the specified EventRecord message, length delimited. Does not implicitly {@link eventstore.proto.EventRecord.verify|verify} messages.
             * @param {eventstore.proto.EventRecord$Properties} message EventRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventRecord.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EventRecord message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.EventRecord} EventRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventRecord.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.EventRecord();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.eventStreamId = reader.string();
                            break;
                        case 2:
                            message.eventNumber = reader.int32();
                            break;
                        case 3:
                            message.eventId = reader.bytes();
                            break;
                        case 4:
                            message.eventType = reader.string();
                            break;
                        case 5:
                            message.dataContentType = reader.int32();
                            break;
                        case 6:
                            message.metadataContentType = reader.int32();
                            break;
                        case 7:
                            message.data = reader.bytes();
                            break;
                        case 8:
                            message.metadata = reader.bytes();
                            break;
                        case 9:
                            message.created = reader.int64();
                            break;
                        case 10:
                            message.createdEpoch = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("eventNumber"))
                    throw $util.ProtocolError("missing required 'eventNumber'", { instance: message });
                if (!message.hasOwnProperty("eventId"))
                    throw $util.ProtocolError("missing required 'eventId'", { instance: message });
                if (!message.hasOwnProperty("eventType"))
                    throw $util.ProtocolError("missing required 'eventType'", { instance: message });
                if (!message.hasOwnProperty("dataContentType"))
                    throw $util.ProtocolError("missing required 'dataContentType'", { instance: message });
                if (!message.hasOwnProperty("metadataContentType"))
                    throw $util.ProtocolError("missing required 'metadataContentType'", { instance: message });
                if (!message.hasOwnProperty("data"))
                    throw $util.ProtocolError("missing required 'data'", { instance: message });
                return message;
            };

            /**
             * Decodes an EventRecord message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.EventRecord} EventRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventRecord.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EventRecord message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EventRecord.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (!$util.isInteger(message.eventNumber))
                    return "eventNumber: integer expected";
                if (!(message.eventId && typeof message.eventId.length === "number" || $util.isString(message.eventId)))
                    return "eventId: buffer expected";
                if (!$util.isString(message.eventType))
                    return "eventType: string expected";
                if (!$util.isInteger(message.dataContentType))
                    return "dataContentType: integer expected";
                if (!$util.isInteger(message.metadataContentType))
                    return "metadataContentType: integer expected";
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    if (!(message.metadata && typeof message.metadata.length === "number" || $util.isString(message.metadata)))
                        return "metadata: buffer expected";
                if (message.created != null && message.hasOwnProperty("created"))
                    if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                        return "created: integer|Long expected";
                if (message.createdEpoch != null && message.hasOwnProperty("createdEpoch"))
                    if (!$util.isInteger(message.createdEpoch) && !(message.createdEpoch && $util.isInteger(message.createdEpoch.low) && $util.isInteger(message.createdEpoch.high)))
                        return "createdEpoch: integer|Long expected";
                return null;
            };

            /**
             * Creates an EventRecord message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.EventRecord} EventRecord
             */
            EventRecord.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.EventRecord)
                    return object;
                var message = new $root.eventstore.proto.EventRecord();
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.eventNumber != null)
                    message.eventNumber = object.eventNumber | 0;
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, message.eventId = $util.newBuffer($util.base64.length(object.eventId)), 0);
                    else if (object.eventId.length)
                    message.eventId = object.eventId;
                if (object.eventType != null)
                    message.eventType = String(object.eventType);
                if (object.dataContentType != null)
                    message.dataContentType = object.dataContentType | 0;
                if (object.metadataContentType != null)
                    message.metadataContentType = object.metadataContentType | 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                    message.data = object.data;
                if (object.metadata != null)
                    if (typeof object.metadata === "string")
                        $util.base64.decode(object.metadata, message.metadata = $util.newBuffer($util.base64.length(object.metadata)), 0);
                    else if (object.metadata.length)
                    message.metadata = object.metadata;
                if (object.created != null)
                    if ($util.Long)
                        (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                    else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
                if (object.createdEpoch != null)
                    if ($util.Long)
                        (message.createdEpoch = $util.Long.fromValue(object.createdEpoch)).unsigned = false;
                    else if (typeof object.createdEpoch === "string")
                    message.createdEpoch = parseInt(object.createdEpoch, 10);
                else if (typeof object.createdEpoch === "number")
                    message.createdEpoch = object.createdEpoch;
                else if (typeof object.createdEpoch === "object")
                    message.createdEpoch = new $util.LongBits(object.createdEpoch.low >>> 0, object.createdEpoch.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates an EventRecord message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.EventRecord.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.EventRecord} EventRecord
             */
            EventRecord.from = EventRecord.fromObject;

            /**
             * Creates a plain object from an EventRecord message. Also converts values to other types if specified.
             * @param {eventstore.proto.EventRecord} message EventRecord
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventRecord.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.eventStreamId = "";
                    object.eventNumber = 0;
                    object.eventId = options.bytes === String ? "" : [];
                    object.eventType = "";
                    object.dataContentType = 0;
                    object.metadataContentType = 0;
                    object.data = options.bytes === String ? "" : [];
                    object.metadata = options.bytes === String ? "" : [];
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.created = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.createdEpoch = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.createdEpoch = options.longs === String ? "0" : 0;
                }
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.eventNumber != null && message.hasOwnProperty("eventNumber"))
                    object.eventNumber = message.eventNumber;
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId = options.bytes === String ? $util.base64.encode(message.eventId, 0, message.eventId.length) : options.bytes === Array ? Array.prototype.slice.call(message.eventId) : message.eventId;
                if (message.eventType != null && message.hasOwnProperty("eventType"))
                    object.eventType = message.eventType;
                if (message.dataContentType != null && message.hasOwnProperty("dataContentType"))
                    object.dataContentType = message.dataContentType;
                if (message.metadataContentType != null && message.hasOwnProperty("metadataContentType"))
                    object.metadataContentType = message.metadataContentType;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    object.metadata = options.bytes === String ? $util.base64.encode(message.metadata, 0, message.metadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.metadata) : message.metadata;
                if (message.created != null && message.hasOwnProperty("created"))
                    if (typeof message.created === "number")
                        object.created = options.longs === String ? String(message.created) : message.created;
                    else
                        object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
                if (message.createdEpoch != null && message.hasOwnProperty("createdEpoch"))
                    if (typeof message.createdEpoch === "number")
                        object.createdEpoch = options.longs === String ? String(message.createdEpoch) : message.createdEpoch;
                    else
                        object.createdEpoch = options.longs === String ? $util.Long.prototype.toString.call(message.createdEpoch) : options.longs === Number ? new $util.LongBits(message.createdEpoch.low >>> 0, message.createdEpoch.high >>> 0).toNumber() : message.createdEpoch;
                return object;
            };

            /**
             * Creates a plain object from this EventRecord message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventRecord.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EventRecord to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EventRecord.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EventRecord;
        })();

        proto.ResolvedIndexedEvent = (function() {

            /**
             * Properties of a ResolvedIndexedEvent.
             * @typedef eventstore.proto.ResolvedIndexedEvent$Properties
             * @type {Object}
             * @property {eventstore.proto.EventRecord$Properties} [event] ResolvedIndexedEvent event.
             * @property {eventstore.proto.EventRecord$Properties} [link] ResolvedIndexedEvent link.
             */

            /**
             * Constructs a new ResolvedIndexedEvent.
             * @exports eventstore.proto.ResolvedIndexedEvent
             * @constructor
             * @param {eventstore.proto.ResolvedIndexedEvent$Properties=} [properties] Properties to set
             */
            function ResolvedIndexedEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResolvedIndexedEvent event.
             * @type {(eventstore.proto.EventRecord$Properties|null)}
             */
            ResolvedIndexedEvent.prototype.event = null;

            /**
             * ResolvedIndexedEvent link.
             * @type {(eventstore.proto.EventRecord$Properties|null)}
             */
            ResolvedIndexedEvent.prototype.link = null;

            /**
             * Creates a new ResolvedIndexedEvent instance using the specified properties.
             * @param {eventstore.proto.ResolvedIndexedEvent$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent instance
             */
            ResolvedIndexedEvent.create = function create(properties) {
                return new ResolvedIndexedEvent(properties);
            };

            /**
             * Encodes the specified ResolvedIndexedEvent message. Does not implicitly {@link eventstore.proto.ResolvedIndexedEvent.verify|verify} messages.
             * @param {eventstore.proto.ResolvedIndexedEvent$Properties} message ResolvedIndexedEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResolvedIndexedEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.event != null && message.hasOwnProperty("event"))
                    $root.eventstore.proto.EventRecord.encode(message.event, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
                if (message.link != null && message.hasOwnProperty("link"))
                    $root.eventstore.proto.EventRecord.encode(message.link, writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResolvedIndexedEvent message, length delimited. Does not implicitly {@link eventstore.proto.ResolvedIndexedEvent.verify|verify} messages.
             * @param {eventstore.proto.ResolvedIndexedEvent$Properties} message ResolvedIndexedEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResolvedIndexedEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResolvedIndexedEvent message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResolvedIndexedEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ResolvedIndexedEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.event = $root.eventstore.proto.EventRecord.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.link = $root.eventstore.proto.EventRecord.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResolvedIndexedEvent message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResolvedIndexedEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResolvedIndexedEvent message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ResolvedIndexedEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.event != null && message.hasOwnProperty("event")) {
                    var error = $root.eventstore.proto.EventRecord.verify(message.event);
                    if (error)
                        return "event." + error;
                }
                if (message.link != null && message.hasOwnProperty("link")) {
                    var error = $root.eventstore.proto.EventRecord.verify(message.link);
                    if (error)
                        return "link." + error;
                }
                return null;
            };

            /**
             * Creates a ResolvedIndexedEvent message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent
             */
            ResolvedIndexedEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ResolvedIndexedEvent)
                    return object;
                var message = new $root.eventstore.proto.ResolvedIndexedEvent();
                if (object.event != null) {
                    if (typeof object.event !== "object")
                        throw TypeError(".eventstore.proto.ResolvedIndexedEvent.event: object expected");
                    message.event = $root.eventstore.proto.EventRecord.fromObject(object.event);
                }
                if (object.link != null) {
                    if (typeof object.link !== "object")
                        throw TypeError(".eventstore.proto.ResolvedIndexedEvent.link: object expected");
                    message.link = $root.eventstore.proto.EventRecord.fromObject(object.link);
                }
                return message;
            };

            /**
             * Creates a ResolvedIndexedEvent message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ResolvedIndexedEvent.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent
             */
            ResolvedIndexedEvent.from = ResolvedIndexedEvent.fromObject;

            /**
             * Creates a plain object from a ResolvedIndexedEvent message. Also converts values to other types if specified.
             * @param {eventstore.proto.ResolvedIndexedEvent} message ResolvedIndexedEvent
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResolvedIndexedEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.event = null;
                    object.link = null;
                }
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = $root.eventstore.proto.EventRecord.toObject(message.event, options);
                if (message.link != null && message.hasOwnProperty("link"))
                    object.link = $root.eventstore.proto.EventRecord.toObject(message.link, options);
                return object;
            };

            /**
             * Creates a plain object from this ResolvedIndexedEvent message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResolvedIndexedEvent.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ResolvedIndexedEvent to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ResolvedIndexedEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResolvedIndexedEvent;
        })();

        proto.ResolvedEvent = (function() {

            /**
             * Properties of a ResolvedEvent.
             * @typedef eventstore.proto.ResolvedEvent$Properties
             * @type {Object}
             * @property {eventstore.proto.EventRecord$Properties} [event] ResolvedEvent event.
             * @property {eventstore.proto.EventRecord$Properties} [link] ResolvedEvent link.
             * @property {number|Long} commitPosition ResolvedEvent commitPosition.
             * @property {number|Long} preparePosition ResolvedEvent preparePosition.
             */

            /**
             * Constructs a new ResolvedEvent.
             * @exports eventstore.proto.ResolvedEvent
             * @constructor
             * @param {eventstore.proto.ResolvedEvent$Properties=} [properties] Properties to set
             */
            function ResolvedEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResolvedEvent event.
             * @type {(eventstore.proto.EventRecord$Properties|null)}
             */
            ResolvedEvent.prototype.event = null;

            /**
             * ResolvedEvent link.
             * @type {(eventstore.proto.EventRecord$Properties|null)}
             */
            ResolvedEvent.prototype.link = null;

            /**
             * ResolvedEvent commitPosition.
             * @type {number|Long}
             */
            ResolvedEvent.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * ResolvedEvent preparePosition.
             * @type {number|Long}
             */
            ResolvedEvent.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * Creates a new ResolvedEvent instance using the specified properties.
             * @param {eventstore.proto.ResolvedEvent$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent instance
             */
            ResolvedEvent.create = function create(properties) {
                return new ResolvedEvent(properties);
            };

            /**
             * Encodes the specified ResolvedEvent message. Does not implicitly {@link eventstore.proto.ResolvedEvent.verify|verify} messages.
             * @param {eventstore.proto.ResolvedEvent$Properties} message ResolvedEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResolvedEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.event != null && message.hasOwnProperty("event"))
                    $root.eventstore.proto.EventRecord.encode(message.event, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
                if (message.link != null && message.hasOwnProperty("link"))
                    $root.eventstore.proto.EventRecord.encode(message.link, writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
                writer.uint32( /* id 3, wireType 0 =*/ 24).int64(message.commitPosition);
                writer.uint32( /* id 4, wireType 0 =*/ 32).int64(message.preparePosition);
                return writer;
            };

            /**
             * Encodes the specified ResolvedEvent message, length delimited. Does not implicitly {@link eventstore.proto.ResolvedEvent.verify|verify} messages.
             * @param {eventstore.proto.ResolvedEvent$Properties} message ResolvedEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResolvedEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResolvedEvent message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResolvedEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ResolvedEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.event = $root.eventstore.proto.EventRecord.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.link = $root.eventstore.proto.EventRecord.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.commitPosition = reader.int64();
                            break;
                        case 4:
                            message.preparePosition = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("commitPosition"))
                    throw $util.ProtocolError("missing required 'commitPosition'", { instance: message });
                if (!message.hasOwnProperty("preparePosition"))
                    throw $util.ProtocolError("missing required 'preparePosition'", { instance: message });
                return message;
            };

            /**
             * Decodes a ResolvedEvent message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResolvedEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResolvedEvent message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ResolvedEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.event != null && message.hasOwnProperty("event")) {
                    var error = $root.eventstore.proto.EventRecord.verify(message.event);
                    if (error)
                        return "event." + error;
                }
                if (message.link != null && message.hasOwnProperty("link")) {
                    var error = $root.eventstore.proto.EventRecord.verify(message.link);
                    if (error)
                        return "link." + error;
                }
                if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                    return "commitPosition: integer|Long expected";
                if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                    return "preparePosition: integer|Long expected";
                return null;
            };

            /**
             * Creates a ResolvedEvent message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent
             */
            ResolvedEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ResolvedEvent)
                    return object;
                var message = new $root.eventstore.proto.ResolvedEvent();
                if (object.event != null) {
                    if (typeof object.event !== "object")
                        throw TypeError(".eventstore.proto.ResolvedEvent.event: object expected");
                    message.event = $root.eventstore.proto.EventRecord.fromObject(object.event);
                }
                if (object.link != null) {
                    if (typeof object.link !== "object")
                        throw TypeError(".eventstore.proto.ResolvedEvent.link: object expected");
                    message.link = $root.eventstore.proto.EventRecord.fromObject(object.link);
                }
                if (object.commitPosition != null)
                    if ($util.Long)
                        (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                    else if (typeof object.commitPosition === "string")
                    message.commitPosition = parseInt(object.commitPosition, 10);
                else if (typeof object.commitPosition === "number")
                    message.commitPosition = object.commitPosition;
                else if (typeof object.commitPosition === "object")
                    message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                if (object.preparePosition != null)
                    if ($util.Long)
                        (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                    else if (typeof object.preparePosition === "string")
                    message.preparePosition = parseInt(object.preparePosition, 10);
                else if (typeof object.preparePosition === "number")
                    message.preparePosition = object.preparePosition;
                else if (typeof object.preparePosition === "object")
                    message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a ResolvedEvent message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ResolvedEvent.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent
             */
            ResolvedEvent.from = ResolvedEvent.fromObject;

            /**
             * Creates a plain object from a ResolvedEvent message. Also converts values to other types if specified.
             * @param {eventstore.proto.ResolvedEvent} message ResolvedEvent
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResolvedEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.event = null;
                    object.link = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.commitPosition = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.preparePosition = options.longs === String ? "0" : 0;
                }
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = $root.eventstore.proto.EventRecord.toObject(message.event, options);
                if (message.link != null && message.hasOwnProperty("link"))
                    object.link = $root.eventstore.proto.EventRecord.toObject(message.link, options);
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    if (typeof message.commitPosition === "number")
                        object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                    else
                        object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    if (typeof message.preparePosition === "number")
                        object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                    else
                        object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                return object;
            };

            /**
             * Creates a plain object from this ResolvedEvent message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResolvedEvent.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ResolvedEvent to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ResolvedEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResolvedEvent;
        })();

        proto.WriteEvents = (function() {

            /**
             * Properties of a WriteEvents.
             * @typedef eventstore.proto.WriteEvents$Properties
             * @type {Object}
             * @property {string} eventStreamId WriteEvents eventStreamId.
             * @property {number} expectedVersion WriteEvents expectedVersion.
             * @property {Array.<eventstore.proto.NewEvent$Properties>} [events] WriteEvents events.
             * @property {boolean} requireMaster WriteEvents requireMaster.
             */

            /**
             * Constructs a new WriteEvents.
             * @exports eventstore.proto.WriteEvents
             * @constructor
             * @param {eventstore.proto.WriteEvents$Properties=} [properties] Properties to set
             */
            function WriteEvents(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WriteEvents eventStreamId.
             * @type {string}
             */
            WriteEvents.prototype.eventStreamId = "";

            /**
             * WriteEvents expectedVersion.
             * @type {number}
             */
            WriteEvents.prototype.expectedVersion = 0;

            /**
             * WriteEvents events.
             * @type {Array.<eventstore.proto.NewEvent$Properties>}
             */
            WriteEvents.prototype.events = $util.emptyArray;

            /**
             * WriteEvents requireMaster.
             * @type {boolean}
             */
            WriteEvents.prototype.requireMaster = false;

            /**
             * Creates a new WriteEvents instance using the specified properties.
             * @param {eventstore.proto.WriteEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.WriteEvents} WriteEvents instance
             */
            WriteEvents.create = function create(properties) {
                return new WriteEvents(properties);
            };

            /**
             * Encodes the specified WriteEvents message. Does not implicitly {@link eventstore.proto.WriteEvents.verify|verify} messages.
             * @param {eventstore.proto.WriteEvents$Properties} message WriteEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WriteEvents.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.eventStreamId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.expectedVersion);
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.eventstore.proto.NewEvent.encode(message.events[i], writer.uint32( /* id 3, wireType 2 =*/ 26).fork()).ldelim();
                writer.uint32( /* id 4, wireType 0 =*/ 32).bool(message.requireMaster);
                return writer;
            };

            /**
             * Encodes the specified WriteEvents message, length delimited. Does not implicitly {@link eventstore.proto.WriteEvents.verify|verify} messages.
             * @param {eventstore.proto.WriteEvents$Properties} message WriteEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WriteEvents.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WriteEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.WriteEvents} WriteEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WriteEvents.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.WriteEvents();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.eventStreamId = reader.string();
                            break;
                        case 2:
                            message.expectedVersion = reader.int32();
                            break;
                        case 3:
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push($root.eventstore.proto.NewEvent.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            message.requireMaster = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("expectedVersion"))
                    throw $util.ProtocolError("missing required 'expectedVersion'", { instance: message });
                if (!message.hasOwnProperty("requireMaster"))
                    throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                return message;
            };

            /**
             * Decodes a WriteEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.WriteEvents} WriteEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WriteEvents.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WriteEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            WriteEvents.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (!$util.isInteger(message.expectedVersion))
                    return "expectedVersion: integer expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.eventstore.proto.NewEvent.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                if (typeof message.requireMaster !== "boolean")
                    return "requireMaster: boolean expected";
                return null;
            };

            /**
             * Creates a WriteEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.WriteEvents} WriteEvents
             */
            WriteEvents.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.WriteEvents)
                    return object;
                var message = new $root.eventstore.proto.WriteEvents();
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.expectedVersion != null)
                    message.expectedVersion = object.expectedVersion | 0;
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".eventstore.proto.WriteEvents.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".eventstore.proto.WriteEvents.events: object expected");
                        message.events[i] = $root.eventstore.proto.NewEvent.fromObject(object.events[i]);
                    }
                }
                if (object.requireMaster != null)
                    message.requireMaster = Boolean(object.requireMaster);
                return message;
            };

            /**
             * Creates a WriteEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.WriteEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.WriteEvents} WriteEvents
             */
            WriteEvents.from = WriteEvents.fromObject;

            /**
             * Creates a plain object from a WriteEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.WriteEvents} message WriteEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WriteEvents.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (options.defaults) {
                    object.eventStreamId = "";
                    object.expectedVersion = 0;
                    object.requireMaster = false;
                }
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.expectedVersion != null && message.hasOwnProperty("expectedVersion"))
                    object.expectedVersion = message.expectedVersion;
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.eventstore.proto.NewEvent.toObject(message.events[j], options);
                }
                if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                    object.requireMaster = message.requireMaster;
                return object;
            };

            /**
             * Creates a plain object from this WriteEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WriteEvents.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this WriteEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            WriteEvents.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WriteEvents;
        })();

        proto.WriteEventsCompleted = (function() {

            /**
             * Properties of a WriteEventsCompleted.
             * @typedef eventstore.proto.WriteEventsCompleted$Properties
             * @type {Object}
             * @property {eventstore.proto.OperationResult} result WriteEventsCompleted result.
             * @property {string} [message] WriteEventsCompleted message.
             * @property {number} firstEventNumber WriteEventsCompleted firstEventNumber.
             * @property {number} lastEventNumber WriteEventsCompleted lastEventNumber.
             * @property {number|Long} [preparePosition] WriteEventsCompleted preparePosition.
             * @property {number|Long} [commitPosition] WriteEventsCompleted commitPosition.
             */

            /**
             * Constructs a new WriteEventsCompleted.
             * @exports eventstore.proto.WriteEventsCompleted
             * @constructor
             * @param {eventstore.proto.WriteEventsCompleted$Properties=} [properties] Properties to set
             */
            function WriteEventsCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WriteEventsCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            WriteEventsCompleted.prototype.result = 0;

            /**
             * WriteEventsCompleted message.
             * @type {string}
             */
            WriteEventsCompleted.prototype.message = "";

            /**
             * WriteEventsCompleted firstEventNumber.
             * @type {number}
             */
            WriteEventsCompleted.prototype.firstEventNumber = 0;

            /**
             * WriteEventsCompleted lastEventNumber.
             * @type {number}
             */
            WriteEventsCompleted.prototype.lastEventNumber = 0;

            /**
             * WriteEventsCompleted preparePosition.
             * @type {number|Long}
             */
            WriteEventsCompleted.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * WriteEventsCompleted commitPosition.
             * @type {number|Long}
             */
            WriteEventsCompleted.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * Creates a new WriteEventsCompleted instance using the specified properties.
             * @param {eventstore.proto.WriteEventsCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted instance
             */
            WriteEventsCompleted.create = function create(properties) {
                return new WriteEventsCompleted(properties);
            };

            /**
             * Encodes the specified WriteEventsCompleted message. Does not implicitly {@link eventstore.proto.WriteEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.WriteEventsCompleted$Properties} message WriteEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WriteEventsCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.result);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.message);
                writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.firstEventNumber);
                writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.lastEventNumber);
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    writer.uint32( /* id 5, wireType 0 =*/ 40).int64(message.preparePosition);
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    writer.uint32( /* id 6, wireType 0 =*/ 48).int64(message.commitPosition);
                return writer;
            };

            /**
             * Encodes the specified WriteEventsCompleted message, length delimited. Does not implicitly {@link eventstore.proto.WriteEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.WriteEventsCompleted$Properties} message WriteEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WriteEventsCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WriteEventsCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WriteEventsCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.WriteEventsCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.result = reader.uint32();
                            break;
                        case 2:
                            message.message = reader.string();
                            break;
                        case 3:
                            message.firstEventNumber = reader.int32();
                            break;
                        case 4:
                            message.lastEventNumber = reader.int32();
                            break;
                        case 5:
                            message.preparePosition = reader.int64();
                            break;
                        case 6:
                            message.commitPosition = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("firstEventNumber"))
                    throw $util.ProtocolError("missing required 'firstEventNumber'", { instance: message });
                if (!message.hasOwnProperty("lastEventNumber"))
                    throw $util.ProtocolError("missing required 'lastEventNumber'", { instance: message });
                return message;
            };

            /**
             * Decodes a WriteEventsCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WriteEventsCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WriteEventsCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            WriteEventsCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            break;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (!$util.isInteger(message.firstEventNumber))
                    return "firstEventNumber: integer expected";
                if (!$util.isInteger(message.lastEventNumber))
                    return "lastEventNumber: integer expected";
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                        return "preparePosition: integer|Long expected";
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                        return "commitPosition: integer|Long expected";
                return null;
            };

            /**
             * Creates a WriteEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted
             */
            WriteEventsCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.WriteEventsCompleted)
                    return object;
                var message = new $root.eventstore.proto.WriteEventsCompleted();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "PrepareTimeout":
                    case 1:
                        message.result = 1;
                        break;
                    case "CommitTimeout":
                    case 2:
                        message.result = 2;
                        break;
                    case "ForwardTimeout":
                    case 3:
                        message.result = 3;
                        break;
                    case "WrongExpectedVersion":
                    case 4:
                        message.result = 4;
                        break;
                    case "StreamDeleted":
                    case 5:
                        message.result = 5;
                        break;
                    case "InvalidTransaction":
                    case 6:
                        message.result = 6;
                        break;
                    case "AccessDenied":
                    case 7:
                        message.result = 7;
                        break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                if (object.firstEventNumber != null)
                    message.firstEventNumber = object.firstEventNumber | 0;
                if (object.lastEventNumber != null)
                    message.lastEventNumber = object.lastEventNumber | 0;
                if (object.preparePosition != null)
                    if ($util.Long)
                        (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                    else if (typeof object.preparePosition === "string")
                    message.preparePosition = parseInt(object.preparePosition, 10);
                else if (typeof object.preparePosition === "number")
                    message.preparePosition = object.preparePosition;
                else if (typeof object.preparePosition === "object")
                    message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                if (object.commitPosition != null)
                    if ($util.Long)
                        (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                    else if (typeof object.commitPosition === "string")
                    message.commitPosition = parseInt(object.commitPosition, 10);
                else if (typeof object.commitPosition === "number")
                    message.commitPosition = object.commitPosition;
                else if (typeof object.commitPosition === "object")
                    message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a WriteEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.WriteEventsCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted
             */
            WriteEventsCompleted.from = WriteEventsCompleted.fromObject;

            /**
             * Creates a plain object from a WriteEventsCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.WriteEventsCompleted} message WriteEventsCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WriteEventsCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.result = options.enums === String ? "Success" : 0;
                    object.message = "";
                    object.firstEventNumber = 0;
                    object.lastEventNumber = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.preparePosition = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.commitPosition = options.longs === String ? "0" : 0;
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.OperationResult[message.result] : message.result;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.firstEventNumber != null && message.hasOwnProperty("firstEventNumber"))
                    object.firstEventNumber = message.firstEventNumber;
                if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                    object.lastEventNumber = message.lastEventNumber;
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    if (typeof message.preparePosition === "number")
                        object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                    else
                        object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    if (typeof message.commitPosition === "number")
                        object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                    else
                        object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                return object;
            };

            /**
             * Creates a plain object from this WriteEventsCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WriteEventsCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this WriteEventsCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            WriteEventsCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WriteEventsCompleted;
        })();

        proto.DeleteStream = (function() {

            /**
             * Properties of a DeleteStream.
             * @typedef eventstore.proto.DeleteStream$Properties
             * @type {Object}
             * @property {string} eventStreamId DeleteStream eventStreamId.
             * @property {number} expectedVersion DeleteStream expectedVersion.
             * @property {boolean} requireMaster DeleteStream requireMaster.
             * @property {boolean} [hardDelete] DeleteStream hardDelete.
             */

            /**
             * Constructs a new DeleteStream.
             * @exports eventstore.proto.DeleteStream
             * @constructor
             * @param {eventstore.proto.DeleteStream$Properties=} [properties] Properties to set
             */
            function DeleteStream(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteStream eventStreamId.
             * @type {string}
             */
            DeleteStream.prototype.eventStreamId = "";

            /**
             * DeleteStream expectedVersion.
             * @type {number}
             */
            DeleteStream.prototype.expectedVersion = 0;

            /**
             * DeleteStream requireMaster.
             * @type {boolean}
             */
            DeleteStream.prototype.requireMaster = false;

            /**
             * DeleteStream hardDelete.
             * @type {boolean}
             */
            DeleteStream.prototype.hardDelete = false;

            /**
             * Creates a new DeleteStream instance using the specified properties.
             * @param {eventstore.proto.DeleteStream$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.DeleteStream} DeleteStream instance
             */
            DeleteStream.create = function create(properties) {
                return new DeleteStream(properties);
            };

            /**
             * Encodes the specified DeleteStream message. Does not implicitly {@link eventstore.proto.DeleteStream.verify|verify} messages.
             * @param {eventstore.proto.DeleteStream$Properties} message DeleteStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteStream.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.eventStreamId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.expectedVersion);
                writer.uint32( /* id 3, wireType 0 =*/ 24).bool(message.requireMaster);
                if (message.hardDelete != null && message.hasOwnProperty("hardDelete"))
                    writer.uint32( /* id 4, wireType 0 =*/ 32).bool(message.hardDelete);
                return writer;
            };

            /**
             * Encodes the specified DeleteStream message, length delimited. Does not implicitly {@link eventstore.proto.DeleteStream.verify|verify} messages.
             * @param {eventstore.proto.DeleteStream$Properties} message DeleteStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteStream.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteStream message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.DeleteStream} DeleteStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteStream.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.DeleteStream();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.eventStreamId = reader.string();
                            break;
                        case 2:
                            message.expectedVersion = reader.int32();
                            break;
                        case 3:
                            message.requireMaster = reader.bool();
                            break;
                        case 4:
                            message.hardDelete = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("expectedVersion"))
                    throw $util.ProtocolError("missing required 'expectedVersion'", { instance: message });
                if (!message.hasOwnProperty("requireMaster"))
                    throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                return message;
            };

            /**
             * Decodes a DeleteStream message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.DeleteStream} DeleteStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteStream.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteStream message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            DeleteStream.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (!$util.isInteger(message.expectedVersion))
                    return "expectedVersion: integer expected";
                if (typeof message.requireMaster !== "boolean")
                    return "requireMaster: boolean expected";
                if (message.hardDelete != null && message.hasOwnProperty("hardDelete"))
                    if (typeof message.hardDelete !== "boolean")
                        return "hardDelete: boolean expected";
                return null;
            };

            /**
             * Creates a DeleteStream message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeleteStream} DeleteStream
             */
            DeleteStream.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.DeleteStream)
                    return object;
                var message = new $root.eventstore.proto.DeleteStream();
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.expectedVersion != null)
                    message.expectedVersion = object.expectedVersion | 0;
                if (object.requireMaster != null)
                    message.requireMaster = Boolean(object.requireMaster);
                if (object.hardDelete != null)
                    message.hardDelete = Boolean(object.hardDelete);
                return message;
            };

            /**
             * Creates a DeleteStream message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.DeleteStream.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeleteStream} DeleteStream
             */
            DeleteStream.from = DeleteStream.fromObject;

            /**
             * Creates a plain object from a DeleteStream message. Also converts values to other types if specified.
             * @param {eventstore.proto.DeleteStream} message DeleteStream
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteStream.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.eventStreamId = "";
                    object.expectedVersion = 0;
                    object.requireMaster = false;
                    object.hardDelete = false;
                }
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.expectedVersion != null && message.hasOwnProperty("expectedVersion"))
                    object.expectedVersion = message.expectedVersion;
                if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                    object.requireMaster = message.requireMaster;
                if (message.hardDelete != null && message.hasOwnProperty("hardDelete"))
                    object.hardDelete = message.hardDelete;
                return object;
            };

            /**
             * Creates a plain object from this DeleteStream message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteStream.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this DeleteStream to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            DeleteStream.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteStream;
        })();

        proto.DeleteStreamCompleted = (function() {

            /**
             * Properties of a DeleteStreamCompleted.
             * @typedef eventstore.proto.DeleteStreamCompleted$Properties
             * @type {Object}
             * @property {eventstore.proto.OperationResult} result DeleteStreamCompleted result.
             * @property {string} [message] DeleteStreamCompleted message.
             * @property {number|Long} [preparePosition] DeleteStreamCompleted preparePosition.
             * @property {number|Long} [commitPosition] DeleteStreamCompleted commitPosition.
             */

            /**
             * Constructs a new DeleteStreamCompleted.
             * @exports eventstore.proto.DeleteStreamCompleted
             * @constructor
             * @param {eventstore.proto.DeleteStreamCompleted$Properties=} [properties] Properties to set
             */
            function DeleteStreamCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteStreamCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            DeleteStreamCompleted.prototype.result = 0;

            /**
             * DeleteStreamCompleted message.
             * @type {string}
             */
            DeleteStreamCompleted.prototype.message = "";

            /**
             * DeleteStreamCompleted preparePosition.
             * @type {number|Long}
             */
            DeleteStreamCompleted.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * DeleteStreamCompleted commitPosition.
             * @type {number|Long}
             */
            DeleteStreamCompleted.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * Creates a new DeleteStreamCompleted instance using the specified properties.
             * @param {eventstore.proto.DeleteStreamCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted instance
             */
            DeleteStreamCompleted.create = function create(properties) {
                return new DeleteStreamCompleted(properties);
            };

            /**
             * Encodes the specified DeleteStreamCompleted message. Does not implicitly {@link eventstore.proto.DeleteStreamCompleted.verify|verify} messages.
             * @param {eventstore.proto.DeleteStreamCompleted$Properties} message DeleteStreamCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteStreamCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.result);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.message);
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    writer.uint32( /* id 3, wireType 0 =*/ 24).int64(message.preparePosition);
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    writer.uint32( /* id 4, wireType 0 =*/ 32).int64(message.commitPosition);
                return writer;
            };

            /**
             * Encodes the specified DeleteStreamCompleted message, length delimited. Does not implicitly {@link eventstore.proto.DeleteStreamCompleted.verify|verify} messages.
             * @param {eventstore.proto.DeleteStreamCompleted$Properties} message DeleteStreamCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteStreamCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteStreamCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteStreamCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.DeleteStreamCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.result = reader.uint32();
                            break;
                        case 2:
                            message.message = reader.string();
                            break;
                        case 3:
                            message.preparePosition = reader.int64();
                            break;
                        case 4:
                            message.commitPosition = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a DeleteStreamCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteStreamCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteStreamCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            DeleteStreamCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            break;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                        return "preparePosition: integer|Long expected";
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                        return "commitPosition: integer|Long expected";
                return null;
            };

            /**
             * Creates a DeleteStreamCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted
             */
            DeleteStreamCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.DeleteStreamCompleted)
                    return object;
                var message = new $root.eventstore.proto.DeleteStreamCompleted();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "PrepareTimeout":
                    case 1:
                        message.result = 1;
                        break;
                    case "CommitTimeout":
                    case 2:
                        message.result = 2;
                        break;
                    case "ForwardTimeout":
                    case 3:
                        message.result = 3;
                        break;
                    case "WrongExpectedVersion":
                    case 4:
                        message.result = 4;
                        break;
                    case "StreamDeleted":
                    case 5:
                        message.result = 5;
                        break;
                    case "InvalidTransaction":
                    case 6:
                        message.result = 6;
                        break;
                    case "AccessDenied":
                    case 7:
                        message.result = 7;
                        break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                if (object.preparePosition != null)
                    if ($util.Long)
                        (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                    else if (typeof object.preparePosition === "string")
                    message.preparePosition = parseInt(object.preparePosition, 10);
                else if (typeof object.preparePosition === "number")
                    message.preparePosition = object.preparePosition;
                else if (typeof object.preparePosition === "object")
                    message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                if (object.commitPosition != null)
                    if ($util.Long)
                        (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                    else if (typeof object.commitPosition === "string")
                    message.commitPosition = parseInt(object.commitPosition, 10);
                else if (typeof object.commitPosition === "number")
                    message.commitPosition = object.commitPosition;
                else if (typeof object.commitPosition === "object")
                    message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a DeleteStreamCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.DeleteStreamCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted
             */
            DeleteStreamCompleted.from = DeleteStreamCompleted.fromObject;

            /**
             * Creates a plain object from a DeleteStreamCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.DeleteStreamCompleted} message DeleteStreamCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteStreamCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.result = options.enums === String ? "Success" : 0;
                    object.message = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.preparePosition = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.commitPosition = options.longs === String ? "0" : 0;
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.OperationResult[message.result] : message.result;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    if (typeof message.preparePosition === "number")
                        object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                    else
                        object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    if (typeof message.commitPosition === "number")
                        object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                    else
                        object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                return object;
            };

            /**
             * Creates a plain object from this DeleteStreamCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteStreamCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this DeleteStreamCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            DeleteStreamCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteStreamCompleted;
        })();

        proto.TransactionStart = (function() {

            /**
             * Properties of a TransactionStart.
             * @typedef eventstore.proto.TransactionStart$Properties
             * @type {Object}
             * @property {string} eventStreamId TransactionStart eventStreamId.
             * @property {number} expectedVersion TransactionStart expectedVersion.
             * @property {boolean} requireMaster TransactionStart requireMaster.
             */

            /**
             * Constructs a new TransactionStart.
             * @exports eventstore.proto.TransactionStart
             * @constructor
             * @param {eventstore.proto.TransactionStart$Properties=} [properties] Properties to set
             */
            function TransactionStart(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TransactionStart eventStreamId.
             * @type {string}
             */
            TransactionStart.prototype.eventStreamId = "";

            /**
             * TransactionStart expectedVersion.
             * @type {number}
             */
            TransactionStart.prototype.expectedVersion = 0;

            /**
             * TransactionStart requireMaster.
             * @type {boolean}
             */
            TransactionStart.prototype.requireMaster = false;

            /**
             * Creates a new TransactionStart instance using the specified properties.
             * @param {eventstore.proto.TransactionStart$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionStart} TransactionStart instance
             */
            TransactionStart.create = function create(properties) {
                return new TransactionStart(properties);
            };

            /**
             * Encodes the specified TransactionStart message. Does not implicitly {@link eventstore.proto.TransactionStart.verify|verify} messages.
             * @param {eventstore.proto.TransactionStart$Properties} message TransactionStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionStart.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.eventStreamId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.expectedVersion);
                writer.uint32( /* id 3, wireType 0 =*/ 24).bool(message.requireMaster);
                return writer;
            };

            /**
             * Encodes the specified TransactionStart message, length delimited. Does not implicitly {@link eventstore.proto.TransactionStart.verify|verify} messages.
             * @param {eventstore.proto.TransactionStart$Properties} message TransactionStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionStart.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TransactionStart message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionStart} TransactionStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionStart.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.TransactionStart();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.eventStreamId = reader.string();
                            break;
                        case 2:
                            message.expectedVersion = reader.int32();
                            break;
                        case 3:
                            message.requireMaster = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("expectedVersion"))
                    throw $util.ProtocolError("missing required 'expectedVersion'", { instance: message });
                if (!message.hasOwnProperty("requireMaster"))
                    throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                return message;
            };

            /**
             * Decodes a TransactionStart message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionStart} TransactionStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionStart.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TransactionStart message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TransactionStart.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (!$util.isInteger(message.expectedVersion))
                    return "expectedVersion: integer expected";
                if (typeof message.requireMaster !== "boolean")
                    return "requireMaster: boolean expected";
                return null;
            };

            /**
             * Creates a TransactionStart message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionStart} TransactionStart
             */
            TransactionStart.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.TransactionStart)
                    return object;
                var message = new $root.eventstore.proto.TransactionStart();
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.expectedVersion != null)
                    message.expectedVersion = object.expectedVersion | 0;
                if (object.requireMaster != null)
                    message.requireMaster = Boolean(object.requireMaster);
                return message;
            };

            /**
             * Creates a TransactionStart message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionStart.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionStart} TransactionStart
             */
            TransactionStart.from = TransactionStart.fromObject;

            /**
             * Creates a plain object from a TransactionStart message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionStart} message TransactionStart
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionStart.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.eventStreamId = "";
                    object.expectedVersion = 0;
                    object.requireMaster = false;
                }
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.expectedVersion != null && message.hasOwnProperty("expectedVersion"))
                    object.expectedVersion = message.expectedVersion;
                if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                    object.requireMaster = message.requireMaster;
                return object;
            };

            /**
             * Creates a plain object from this TransactionStart message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionStart.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TransactionStart to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TransactionStart.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TransactionStart;
        })();

        proto.TransactionStartCompleted = (function() {

            /**
             * Properties of a TransactionStartCompleted.
             * @typedef eventstore.proto.TransactionStartCompleted$Properties
             * @type {Object}
             * @property {number|Long} transactionId TransactionStartCompleted transactionId.
             * @property {eventstore.proto.OperationResult} result TransactionStartCompleted result.
             * @property {string} [message] TransactionStartCompleted message.
             */

            /**
             * Constructs a new TransactionStartCompleted.
             * @exports eventstore.proto.TransactionStartCompleted
             * @constructor
             * @param {eventstore.proto.TransactionStartCompleted$Properties=} [properties] Properties to set
             */
            function TransactionStartCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TransactionStartCompleted transactionId.
             * @type {number|Long}
             */
            TransactionStartCompleted.prototype.transactionId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * TransactionStartCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            TransactionStartCompleted.prototype.result = 0;

            /**
             * TransactionStartCompleted message.
             * @type {string}
             */
            TransactionStartCompleted.prototype.message = "";

            /**
             * Creates a new TransactionStartCompleted instance using the specified properties.
             * @param {eventstore.proto.TransactionStartCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted instance
             */
            TransactionStartCompleted.create = function create(properties) {
                return new TransactionStartCompleted(properties);
            };

            /**
             * Encodes the specified TransactionStartCompleted message. Does not implicitly {@link eventstore.proto.TransactionStartCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionStartCompleted$Properties} message TransactionStartCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionStartCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).int64(message.transactionId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.result);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified TransactionStartCompleted message, length delimited. Does not implicitly {@link eventstore.proto.TransactionStartCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionStartCompleted$Properties} message TransactionStartCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionStartCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TransactionStartCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionStartCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.TransactionStartCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.transactionId = reader.int64();
                            break;
                        case 2:
                            message.result = reader.uint32();
                            break;
                        case 3:
                            message.message = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("transactionId"))
                    throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a TransactionStartCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionStartCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TransactionStartCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TransactionStartCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                    return "transactionId: integer|Long expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            break;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a TransactionStartCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted
             */
            TransactionStartCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.TransactionStartCompleted)
                    return object;
                var message = new $root.eventstore.proto.TransactionStartCompleted();
                if (object.transactionId != null)
                    if ($util.Long)
                        (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                    else if (typeof object.transactionId === "string")
                    message.transactionId = parseInt(object.transactionId, 10);
                else if (typeof object.transactionId === "number")
                    message.transactionId = object.transactionId;
                else if (typeof object.transactionId === "object")
                    message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "PrepareTimeout":
                    case 1:
                        message.result = 1;
                        break;
                    case "CommitTimeout":
                    case 2:
                        message.result = 2;
                        break;
                    case "ForwardTimeout":
                    case 3:
                        message.result = 3;
                        break;
                    case "WrongExpectedVersion":
                    case 4:
                        message.result = 4;
                        break;
                    case "StreamDeleted":
                    case 5:
                        message.result = 5;
                        break;
                    case "InvalidTransaction":
                    case 6:
                        message.result = 6;
                        break;
                    case "AccessDenied":
                    case 7:
                        message.result = 7;
                        break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a TransactionStartCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionStartCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted
             */
            TransactionStartCompleted.from = TransactionStartCompleted.fromObject;

            /**
             * Creates a plain object from a TransactionStartCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionStartCompleted} message TransactionStartCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionStartCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.transactionId = options.longs === String ? "0" : 0;
                    object.result = options.enums === String ? "Success" : 0;
                    object.message = "";
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (typeof message.transactionId === "number")
                        object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                    else
                        object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.OperationResult[message.result] : message.result;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Creates a plain object from this TransactionStartCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionStartCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TransactionStartCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TransactionStartCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TransactionStartCompleted;
        })();

        proto.TransactionWrite = (function() {

            /**
             * Properties of a TransactionWrite.
             * @typedef eventstore.proto.TransactionWrite$Properties
             * @type {Object}
             * @property {number|Long} transactionId TransactionWrite transactionId.
             * @property {Array.<eventstore.proto.NewEvent$Properties>} [events] TransactionWrite events.
             * @property {boolean} requireMaster TransactionWrite requireMaster.
             */

            /**
             * Constructs a new TransactionWrite.
             * @exports eventstore.proto.TransactionWrite
             * @constructor
             * @param {eventstore.proto.TransactionWrite$Properties=} [properties] Properties to set
             */
            function TransactionWrite(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TransactionWrite transactionId.
             * @type {number|Long}
             */
            TransactionWrite.prototype.transactionId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * TransactionWrite events.
             * @type {Array.<eventstore.proto.NewEvent$Properties>}
             */
            TransactionWrite.prototype.events = $util.emptyArray;

            /**
             * TransactionWrite requireMaster.
             * @type {boolean}
             */
            TransactionWrite.prototype.requireMaster = false;

            /**
             * Creates a new TransactionWrite instance using the specified properties.
             * @param {eventstore.proto.TransactionWrite$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite instance
             */
            TransactionWrite.create = function create(properties) {
                return new TransactionWrite(properties);
            };

            /**
             * Encodes the specified TransactionWrite message. Does not implicitly {@link eventstore.proto.TransactionWrite.verify|verify} messages.
             * @param {eventstore.proto.TransactionWrite$Properties} message TransactionWrite message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionWrite.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).int64(message.transactionId);
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.eventstore.proto.NewEvent.encode(message.events[i], writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
                writer.uint32( /* id 3, wireType 0 =*/ 24).bool(message.requireMaster);
                return writer;
            };

            /**
             * Encodes the specified TransactionWrite message, length delimited. Does not implicitly {@link eventstore.proto.TransactionWrite.verify|verify} messages.
             * @param {eventstore.proto.TransactionWrite$Properties} message TransactionWrite message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionWrite.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TransactionWrite message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionWrite.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.TransactionWrite();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.transactionId = reader.int64();
                            break;
                        case 2:
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push($root.eventstore.proto.NewEvent.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.requireMaster = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("transactionId"))
                    throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                if (!message.hasOwnProperty("requireMaster"))
                    throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                return message;
            };

            /**
             * Decodes a TransactionWrite message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionWrite.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TransactionWrite message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TransactionWrite.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                    return "transactionId: integer|Long expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.eventstore.proto.NewEvent.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                if (typeof message.requireMaster !== "boolean")
                    return "requireMaster: boolean expected";
                return null;
            };

            /**
             * Creates a TransactionWrite message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite
             */
            TransactionWrite.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.TransactionWrite)
                    return object;
                var message = new $root.eventstore.proto.TransactionWrite();
                if (object.transactionId != null)
                    if ($util.Long)
                        (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                    else if (typeof object.transactionId === "string")
                    message.transactionId = parseInt(object.transactionId, 10);
                else if (typeof object.transactionId === "number")
                    message.transactionId = object.transactionId;
                else if (typeof object.transactionId === "object")
                    message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".eventstore.proto.TransactionWrite.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".eventstore.proto.TransactionWrite.events: object expected");
                        message.events[i] = $root.eventstore.proto.NewEvent.fromObject(object.events[i]);
                    }
                }
                if (object.requireMaster != null)
                    message.requireMaster = Boolean(object.requireMaster);
                return message;
            };

            /**
             * Creates a TransactionWrite message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionWrite.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite
             */
            TransactionWrite.from = TransactionWrite.fromObject;

            /**
             * Creates a plain object from a TransactionWrite message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionWrite} message TransactionWrite
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionWrite.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.transactionId = options.longs === String ? "0" : 0;
                    object.requireMaster = false;
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (typeof message.transactionId === "number")
                        object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                    else
                        object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.eventstore.proto.NewEvent.toObject(message.events[j], options);
                }
                if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                    object.requireMaster = message.requireMaster;
                return object;
            };

            /**
             * Creates a plain object from this TransactionWrite message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionWrite.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TransactionWrite to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TransactionWrite.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TransactionWrite;
        })();

        proto.TransactionWriteCompleted = (function() {

            /**
             * Properties of a TransactionWriteCompleted.
             * @typedef eventstore.proto.TransactionWriteCompleted$Properties
             * @type {Object}
             * @property {number|Long} transactionId TransactionWriteCompleted transactionId.
             * @property {eventstore.proto.OperationResult} result TransactionWriteCompleted result.
             * @property {string} [message] TransactionWriteCompleted message.
             */

            /**
             * Constructs a new TransactionWriteCompleted.
             * @exports eventstore.proto.TransactionWriteCompleted
             * @constructor
             * @param {eventstore.proto.TransactionWriteCompleted$Properties=} [properties] Properties to set
             */
            function TransactionWriteCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TransactionWriteCompleted transactionId.
             * @type {number|Long}
             */
            TransactionWriteCompleted.prototype.transactionId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * TransactionWriteCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            TransactionWriteCompleted.prototype.result = 0;

            /**
             * TransactionWriteCompleted message.
             * @type {string}
             */
            TransactionWriteCompleted.prototype.message = "";

            /**
             * Creates a new TransactionWriteCompleted instance using the specified properties.
             * @param {eventstore.proto.TransactionWriteCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted instance
             */
            TransactionWriteCompleted.create = function create(properties) {
                return new TransactionWriteCompleted(properties);
            };

            /**
             * Encodes the specified TransactionWriteCompleted message. Does not implicitly {@link eventstore.proto.TransactionWriteCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionWriteCompleted$Properties} message TransactionWriteCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionWriteCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).int64(message.transactionId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.result);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified TransactionWriteCompleted message, length delimited. Does not implicitly {@link eventstore.proto.TransactionWriteCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionWriteCompleted$Properties} message TransactionWriteCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionWriteCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TransactionWriteCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionWriteCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.TransactionWriteCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.transactionId = reader.int64();
                            break;
                        case 2:
                            message.result = reader.uint32();
                            break;
                        case 3:
                            message.message = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("transactionId"))
                    throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a TransactionWriteCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionWriteCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TransactionWriteCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TransactionWriteCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                    return "transactionId: integer|Long expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            break;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a TransactionWriteCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted
             */
            TransactionWriteCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.TransactionWriteCompleted)
                    return object;
                var message = new $root.eventstore.proto.TransactionWriteCompleted();
                if (object.transactionId != null)
                    if ($util.Long)
                        (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                    else if (typeof object.transactionId === "string")
                    message.transactionId = parseInt(object.transactionId, 10);
                else if (typeof object.transactionId === "number")
                    message.transactionId = object.transactionId;
                else if (typeof object.transactionId === "object")
                    message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "PrepareTimeout":
                    case 1:
                        message.result = 1;
                        break;
                    case "CommitTimeout":
                    case 2:
                        message.result = 2;
                        break;
                    case "ForwardTimeout":
                    case 3:
                        message.result = 3;
                        break;
                    case "WrongExpectedVersion":
                    case 4:
                        message.result = 4;
                        break;
                    case "StreamDeleted":
                    case 5:
                        message.result = 5;
                        break;
                    case "InvalidTransaction":
                    case 6:
                        message.result = 6;
                        break;
                    case "AccessDenied":
                    case 7:
                        message.result = 7;
                        break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a TransactionWriteCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionWriteCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted
             */
            TransactionWriteCompleted.from = TransactionWriteCompleted.fromObject;

            /**
             * Creates a plain object from a TransactionWriteCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionWriteCompleted} message TransactionWriteCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionWriteCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.transactionId = options.longs === String ? "0" : 0;
                    object.result = options.enums === String ? "Success" : 0;
                    object.message = "";
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (typeof message.transactionId === "number")
                        object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                    else
                        object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.OperationResult[message.result] : message.result;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Creates a plain object from this TransactionWriteCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionWriteCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TransactionWriteCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TransactionWriteCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TransactionWriteCompleted;
        })();

        proto.TransactionCommit = (function() {

            /**
             * Properties of a TransactionCommit.
             * @typedef eventstore.proto.TransactionCommit$Properties
             * @type {Object}
             * @property {number|Long} transactionId TransactionCommit transactionId.
             * @property {boolean} requireMaster TransactionCommit requireMaster.
             */

            /**
             * Constructs a new TransactionCommit.
             * @exports eventstore.proto.TransactionCommit
             * @constructor
             * @param {eventstore.proto.TransactionCommit$Properties=} [properties] Properties to set
             */
            function TransactionCommit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TransactionCommit transactionId.
             * @type {number|Long}
             */
            TransactionCommit.prototype.transactionId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * TransactionCommit requireMaster.
             * @type {boolean}
             */
            TransactionCommit.prototype.requireMaster = false;

            /**
             * Creates a new TransactionCommit instance using the specified properties.
             * @param {eventstore.proto.TransactionCommit$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit instance
             */
            TransactionCommit.create = function create(properties) {
                return new TransactionCommit(properties);
            };

            /**
             * Encodes the specified TransactionCommit message. Does not implicitly {@link eventstore.proto.TransactionCommit.verify|verify} messages.
             * @param {eventstore.proto.TransactionCommit$Properties} message TransactionCommit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionCommit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).int64(message.transactionId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).bool(message.requireMaster);
                return writer;
            };

            /**
             * Encodes the specified TransactionCommit message, length delimited. Does not implicitly {@link eventstore.proto.TransactionCommit.verify|verify} messages.
             * @param {eventstore.proto.TransactionCommit$Properties} message TransactionCommit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionCommit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TransactionCommit message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionCommit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.TransactionCommit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.transactionId = reader.int64();
                            break;
                        case 2:
                            message.requireMaster = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("transactionId"))
                    throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                if (!message.hasOwnProperty("requireMaster"))
                    throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                return message;
            };

            /**
             * Decodes a TransactionCommit message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionCommit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TransactionCommit message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TransactionCommit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                    return "transactionId: integer|Long expected";
                if (typeof message.requireMaster !== "boolean")
                    return "requireMaster: boolean expected";
                return null;
            };

            /**
             * Creates a TransactionCommit message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit
             */
            TransactionCommit.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.TransactionCommit)
                    return object;
                var message = new $root.eventstore.proto.TransactionCommit();
                if (object.transactionId != null)
                    if ($util.Long)
                        (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                    else if (typeof object.transactionId === "string")
                    message.transactionId = parseInt(object.transactionId, 10);
                else if (typeof object.transactionId === "number")
                    message.transactionId = object.transactionId;
                else if (typeof object.transactionId === "object")
                    message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                if (object.requireMaster != null)
                    message.requireMaster = Boolean(object.requireMaster);
                return message;
            };

            /**
             * Creates a TransactionCommit message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionCommit.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit
             */
            TransactionCommit.from = TransactionCommit.fromObject;

            /**
             * Creates a plain object from a TransactionCommit message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionCommit} message TransactionCommit
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionCommit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.transactionId = options.longs === String ? "0" : 0;
                    object.requireMaster = false;
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (typeof message.transactionId === "number")
                        object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                    else
                        object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                    object.requireMaster = message.requireMaster;
                return object;
            };

            /**
             * Creates a plain object from this TransactionCommit message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionCommit.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TransactionCommit to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TransactionCommit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TransactionCommit;
        })();

        proto.TransactionCommitCompleted = (function() {

            /**
             * Properties of a TransactionCommitCompleted.
             * @typedef eventstore.proto.TransactionCommitCompleted$Properties
             * @type {Object}
             * @property {number|Long} transactionId TransactionCommitCompleted transactionId.
             * @property {eventstore.proto.OperationResult} result TransactionCommitCompleted result.
             * @property {string} [message] TransactionCommitCompleted message.
             * @property {number} firstEventNumber TransactionCommitCompleted firstEventNumber.
             * @property {number} lastEventNumber TransactionCommitCompleted lastEventNumber.
             * @property {number|Long} [preparePosition] TransactionCommitCompleted preparePosition.
             * @property {number|Long} [commitPosition] TransactionCommitCompleted commitPosition.
             */

            /**
             * Constructs a new TransactionCommitCompleted.
             * @exports eventstore.proto.TransactionCommitCompleted
             * @constructor
             * @param {eventstore.proto.TransactionCommitCompleted$Properties=} [properties] Properties to set
             */
            function TransactionCommitCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TransactionCommitCompleted transactionId.
             * @type {number|Long}
             */
            TransactionCommitCompleted.prototype.transactionId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * TransactionCommitCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            TransactionCommitCompleted.prototype.result = 0;

            /**
             * TransactionCommitCompleted message.
             * @type {string}
             */
            TransactionCommitCompleted.prototype.message = "";

            /**
             * TransactionCommitCompleted firstEventNumber.
             * @type {number}
             */
            TransactionCommitCompleted.prototype.firstEventNumber = 0;

            /**
             * TransactionCommitCompleted lastEventNumber.
             * @type {number}
             */
            TransactionCommitCompleted.prototype.lastEventNumber = 0;

            /**
             * TransactionCommitCompleted preparePosition.
             * @type {number|Long}
             */
            TransactionCommitCompleted.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * TransactionCommitCompleted commitPosition.
             * @type {number|Long}
             */
            TransactionCommitCompleted.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * Creates a new TransactionCommitCompleted instance using the specified properties.
             * @param {eventstore.proto.TransactionCommitCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted instance
             */
            TransactionCommitCompleted.create = function create(properties) {
                return new TransactionCommitCompleted(properties);
            };

            /**
             * Encodes the specified TransactionCommitCompleted message. Does not implicitly {@link eventstore.proto.TransactionCommitCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionCommitCompleted$Properties} message TransactionCommitCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionCommitCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).int64(message.transactionId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.result);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.message);
                writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.firstEventNumber);
                writer.uint32( /* id 5, wireType 0 =*/ 40).int32(message.lastEventNumber);
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    writer.uint32( /* id 6, wireType 0 =*/ 48).int64(message.preparePosition);
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    writer.uint32( /* id 7, wireType 0 =*/ 56).int64(message.commitPosition);
                return writer;
            };

            /**
             * Encodes the specified TransactionCommitCompleted message, length delimited. Does not implicitly {@link eventstore.proto.TransactionCommitCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionCommitCompleted$Properties} message TransactionCommitCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionCommitCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TransactionCommitCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionCommitCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.TransactionCommitCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.transactionId = reader.int64();
                            break;
                        case 2:
                            message.result = reader.uint32();
                            break;
                        case 3:
                            message.message = reader.string();
                            break;
                        case 4:
                            message.firstEventNumber = reader.int32();
                            break;
                        case 5:
                            message.lastEventNumber = reader.int32();
                            break;
                        case 6:
                            message.preparePosition = reader.int64();
                            break;
                        case 7:
                            message.commitPosition = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("transactionId"))
                    throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("firstEventNumber"))
                    throw $util.ProtocolError("missing required 'firstEventNumber'", { instance: message });
                if (!message.hasOwnProperty("lastEventNumber"))
                    throw $util.ProtocolError("missing required 'lastEventNumber'", { instance: message });
                return message;
            };

            /**
             * Decodes a TransactionCommitCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionCommitCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TransactionCommitCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            TransactionCommitCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                    return "transactionId: integer|Long expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            break;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (!$util.isInteger(message.firstEventNumber))
                    return "firstEventNumber: integer expected";
                if (!$util.isInteger(message.lastEventNumber))
                    return "lastEventNumber: integer expected";
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                        return "preparePosition: integer|Long expected";
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                        return "commitPosition: integer|Long expected";
                return null;
            };

            /**
             * Creates a TransactionCommitCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted
             */
            TransactionCommitCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.TransactionCommitCompleted)
                    return object;
                var message = new $root.eventstore.proto.TransactionCommitCompleted();
                if (object.transactionId != null)
                    if ($util.Long)
                        (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                    else if (typeof object.transactionId === "string")
                    message.transactionId = parseInt(object.transactionId, 10);
                else if (typeof object.transactionId === "number")
                    message.transactionId = object.transactionId;
                else if (typeof object.transactionId === "object")
                    message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "PrepareTimeout":
                    case 1:
                        message.result = 1;
                        break;
                    case "CommitTimeout":
                    case 2:
                        message.result = 2;
                        break;
                    case "ForwardTimeout":
                    case 3:
                        message.result = 3;
                        break;
                    case "WrongExpectedVersion":
                    case 4:
                        message.result = 4;
                        break;
                    case "StreamDeleted":
                    case 5:
                        message.result = 5;
                        break;
                    case "InvalidTransaction":
                    case 6:
                        message.result = 6;
                        break;
                    case "AccessDenied":
                    case 7:
                        message.result = 7;
                        break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                if (object.firstEventNumber != null)
                    message.firstEventNumber = object.firstEventNumber | 0;
                if (object.lastEventNumber != null)
                    message.lastEventNumber = object.lastEventNumber | 0;
                if (object.preparePosition != null)
                    if ($util.Long)
                        (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                    else if (typeof object.preparePosition === "string")
                    message.preparePosition = parseInt(object.preparePosition, 10);
                else if (typeof object.preparePosition === "number")
                    message.preparePosition = object.preparePosition;
                else if (typeof object.preparePosition === "object")
                    message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                if (object.commitPosition != null)
                    if ($util.Long)
                        (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                    else if (typeof object.commitPosition === "string")
                    message.commitPosition = parseInt(object.commitPosition, 10);
                else if (typeof object.commitPosition === "number")
                    message.commitPosition = object.commitPosition;
                else if (typeof object.commitPosition === "object")
                    message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a TransactionCommitCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionCommitCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted
             */
            TransactionCommitCompleted.from = TransactionCommitCompleted.fromObject;

            /**
             * Creates a plain object from a TransactionCommitCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionCommitCompleted} message TransactionCommitCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionCommitCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.transactionId = options.longs === String ? "0" : 0;
                    object.result = options.enums === String ? "Success" : 0;
                    object.message = "";
                    object.firstEventNumber = 0;
                    object.lastEventNumber = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.preparePosition = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.commitPosition = options.longs === String ? "0" : 0;
                }
                if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                    if (typeof message.transactionId === "number")
                        object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                    else
                        object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.OperationResult[message.result] : message.result;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.firstEventNumber != null && message.hasOwnProperty("firstEventNumber"))
                    object.firstEventNumber = message.firstEventNumber;
                if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                    object.lastEventNumber = message.lastEventNumber;
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    if (typeof message.preparePosition === "number")
                        object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                    else
                        object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    if (typeof message.commitPosition === "number")
                        object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                    else
                        object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                return object;
            };

            /**
             * Creates a plain object from this TransactionCommitCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionCommitCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this TransactionCommitCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            TransactionCommitCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TransactionCommitCompleted;
        })();

        proto.ReadEvent = (function() {

            /**
             * Properties of a ReadEvent.
             * @typedef eventstore.proto.ReadEvent$Properties
             * @type {Object}
             * @property {string} eventStreamId ReadEvent eventStreamId.
             * @property {number} eventNumber ReadEvent eventNumber.
             * @property {boolean} resolveLinkTos ReadEvent resolveLinkTos.
             * @property {boolean} requireMaster ReadEvent requireMaster.
             */

            /**
             * Constructs a new ReadEvent.
             * @exports eventstore.proto.ReadEvent
             * @constructor
             * @param {eventstore.proto.ReadEvent$Properties=} [properties] Properties to set
             */
            function ReadEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadEvent eventStreamId.
             * @type {string}
             */
            ReadEvent.prototype.eventStreamId = "";

            /**
             * ReadEvent eventNumber.
             * @type {number}
             */
            ReadEvent.prototype.eventNumber = 0;

            /**
             * ReadEvent resolveLinkTos.
             * @type {boolean}
             */
            ReadEvent.prototype.resolveLinkTos = false;

            /**
             * ReadEvent requireMaster.
             * @type {boolean}
             */
            ReadEvent.prototype.requireMaster = false;

            /**
             * Creates a new ReadEvent instance using the specified properties.
             * @param {eventstore.proto.ReadEvent$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadEvent} ReadEvent instance
             */
            ReadEvent.create = function create(properties) {
                return new ReadEvent(properties);
            };

            /**
             * Encodes the specified ReadEvent message. Does not implicitly {@link eventstore.proto.ReadEvent.verify|verify} messages.
             * @param {eventstore.proto.ReadEvent$Properties} message ReadEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.eventStreamId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.eventNumber);
                writer.uint32( /* id 3, wireType 0 =*/ 24).bool(message.resolveLinkTos);
                writer.uint32( /* id 4, wireType 0 =*/ 32).bool(message.requireMaster);
                return writer;
            };

            /**
             * Encodes the specified ReadEvent message, length delimited. Does not implicitly {@link eventstore.proto.ReadEvent.verify|verify} messages.
             * @param {eventstore.proto.ReadEvent$Properties} message ReadEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadEvent message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadEvent} ReadEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ReadEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.eventStreamId = reader.string();
                            break;
                        case 2:
                            message.eventNumber = reader.int32();
                            break;
                        case 3:
                            message.resolveLinkTos = reader.bool();
                            break;
                        case 4:
                            message.requireMaster = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("eventNumber"))
                    throw $util.ProtocolError("missing required 'eventNumber'", { instance: message });
                if (!message.hasOwnProperty("resolveLinkTos"))
                    throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                if (!message.hasOwnProperty("requireMaster"))
                    throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                return message;
            };

            /**
             * Decodes a ReadEvent message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadEvent} ReadEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadEvent message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ReadEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (!$util.isInteger(message.eventNumber))
                    return "eventNumber: integer expected";
                if (typeof message.resolveLinkTos !== "boolean")
                    return "resolveLinkTos: boolean expected";
                if (typeof message.requireMaster !== "boolean")
                    return "requireMaster: boolean expected";
                return null;
            };

            /**
             * Creates a ReadEvent message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadEvent} ReadEvent
             */
            ReadEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ReadEvent)
                    return object;
                var message = new $root.eventstore.proto.ReadEvent();
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.eventNumber != null)
                    message.eventNumber = object.eventNumber | 0;
                if (object.resolveLinkTos != null)
                    message.resolveLinkTos = Boolean(object.resolveLinkTos);
                if (object.requireMaster != null)
                    message.requireMaster = Boolean(object.requireMaster);
                return message;
            };

            /**
             * Creates a ReadEvent message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadEvent.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadEvent} ReadEvent
             */
            ReadEvent.from = ReadEvent.fromObject;

            /**
             * Creates a plain object from a ReadEvent message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadEvent} message ReadEvent
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.eventStreamId = "";
                    object.eventNumber = 0;
                    object.resolveLinkTos = false;
                    object.requireMaster = false;
                }
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.eventNumber != null && message.hasOwnProperty("eventNumber"))
                    object.eventNumber = message.eventNumber;
                if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                    object.resolveLinkTos = message.resolveLinkTos;
                if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                    object.requireMaster = message.requireMaster;
                return object;
            };

            /**
             * Creates a plain object from this ReadEvent message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadEvent.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ReadEvent to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ReadEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReadEvent;
        })();

        proto.ReadEventCompleted = (function() {

            /**
             * Properties of a ReadEventCompleted.
             * @typedef eventstore.proto.ReadEventCompleted$Properties
             * @type {Object}
             * @property {eventstore.proto.ReadEventCompleted.ReadEventResult} result ReadEventCompleted result.
             * @property {eventstore.proto.ResolvedIndexedEvent$Properties} event ReadEventCompleted event.
             * @property {string} [error] ReadEventCompleted error.
             */

            /**
             * Constructs a new ReadEventCompleted.
             * @exports eventstore.proto.ReadEventCompleted
             * @constructor
             * @param {eventstore.proto.ReadEventCompleted$Properties=} [properties] Properties to set
             */
            function ReadEventCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadEventCompleted result.
             * @type {eventstore.proto.ReadEventCompleted.ReadEventResult}
             */
            ReadEventCompleted.prototype.result = 0;

            /**
             * ReadEventCompleted event.
             * @type {eventstore.proto.ResolvedIndexedEvent$Properties}
             */
            ReadEventCompleted.prototype.event = null;

            /**
             * ReadEventCompleted error.
             * @type {string}
             */
            ReadEventCompleted.prototype.error = "";

            /**
             * Creates a new ReadEventCompleted instance using the specified properties.
             * @param {eventstore.proto.ReadEventCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted instance
             */
            ReadEventCompleted.create = function create(properties) {
                return new ReadEventCompleted(properties);
            };

            /**
             * Encodes the specified ReadEventCompleted message. Does not implicitly {@link eventstore.proto.ReadEventCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadEventCompleted$Properties} message ReadEventCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEventCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.result);
                $root.eventstore.proto.ResolvedIndexedEvent.encode(message.event, writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified ReadEventCompleted message, length delimited. Does not implicitly {@link eventstore.proto.ReadEventCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadEventCompleted$Properties} message ReadEventCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEventCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadEventCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEventCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ReadEventCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.result = reader.uint32();
                            break;
                        case 2:
                            message.event = $root.eventstore.proto.ResolvedIndexedEvent.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.error = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("event"))
                    throw $util.ProtocolError("missing required 'event'", { instance: message });
                return message;
            };

            /**
             * Decodes a ReadEventCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEventCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadEventCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ReadEventCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            break;
                }
                var error = $root.eventstore.proto.ResolvedIndexedEvent.verify(message.event);
                if (error)
                    return "event." + error;
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates a ReadEventCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted
             */
            ReadEventCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ReadEventCompleted)
                    return object;
                var message = new $root.eventstore.proto.ReadEventCompleted();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "NotFound":
                    case 1:
                        message.result = 1;
                        break;
                    case "NoStream":
                    case 2:
                        message.result = 2;
                        break;
                    case "StreamDeleted":
                    case 3:
                        message.result = 3;
                        break;
                    case "Error":
                    case 4:
                        message.result = 4;
                        break;
                    case "AccessDenied":
                    case 5:
                        message.result = 5;
                        break;
                }
                if (object.event != null) {
                    if (typeof object.event !== "object")
                        throw TypeError(".eventstore.proto.ReadEventCompleted.event: object expected");
                    message.event = $root.eventstore.proto.ResolvedIndexedEvent.fromObject(object.event);
                }
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a ReadEventCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadEventCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted
             */
            ReadEventCompleted.from = ReadEventCompleted.fromObject;

            /**
             * Creates a plain object from a ReadEventCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadEventCompleted} message ReadEventCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadEventCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.result = options.enums === String ? "Success" : 0;
                    object.event = null;
                    object.error = "";
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.ReadEventCompleted.ReadEventResult[message.result] : message.result;
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = $root.eventstore.proto.ResolvedIndexedEvent.toObject(message.event, options);
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Creates a plain object from this ReadEventCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadEventCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ReadEventCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ReadEventCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * ReadEventResult enum.
             * @name ReadEventResult
             * @memberof eventstore.proto.ReadEventCompleted
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} NotFound=1 NotFound value
             * @property {number} NoStream=2 NoStream value
             * @property {number} StreamDeleted=3 StreamDeleted value
             * @property {number} Error=4 Error value
             * @property {number} AccessDenied=5 AccessDenied value
             */
            ReadEventCompleted.ReadEventResult = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "NotFound"] = 1;
                values[valuesById[2] = "NoStream"] = 2;
                values[valuesById[3] = "StreamDeleted"] = 3;
                values[valuesById[4] = "Error"] = 4;
                values[valuesById[5] = "AccessDenied"] = 5;
                return values;
            })();

            return ReadEventCompleted;
        })();

        proto.ReadStreamEvents = (function() {

            /**
             * Properties of a ReadStreamEvents.
             * @typedef eventstore.proto.ReadStreamEvents$Properties
             * @type {Object}
             * @property {string} eventStreamId ReadStreamEvents eventStreamId.
             * @property {number} fromEventNumber ReadStreamEvents fromEventNumber.
             * @property {number} maxCount ReadStreamEvents maxCount.
             * @property {boolean} resolveLinkTos ReadStreamEvents resolveLinkTos.
             * @property {boolean} requireMaster ReadStreamEvents requireMaster.
             */

            /**
             * Constructs a new ReadStreamEvents.
             * @exports eventstore.proto.ReadStreamEvents
             * @constructor
             * @param {eventstore.proto.ReadStreamEvents$Properties=} [properties] Properties to set
             */
            function ReadStreamEvents(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadStreamEvents eventStreamId.
             * @type {string}
             */
            ReadStreamEvents.prototype.eventStreamId = "";

            /**
             * ReadStreamEvents fromEventNumber.
             * @type {number}
             */
            ReadStreamEvents.prototype.fromEventNumber = 0;

            /**
             * ReadStreamEvents maxCount.
             * @type {number}
             */
            ReadStreamEvents.prototype.maxCount = 0;

            /**
             * ReadStreamEvents resolveLinkTos.
             * @type {boolean}
             */
            ReadStreamEvents.prototype.resolveLinkTos = false;

            /**
             * ReadStreamEvents requireMaster.
             * @type {boolean}
             */
            ReadStreamEvents.prototype.requireMaster = false;

            /**
             * Creates a new ReadStreamEvents instance using the specified properties.
             * @param {eventstore.proto.ReadStreamEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents instance
             */
            ReadStreamEvents.create = function create(properties) {
                return new ReadStreamEvents(properties);
            };

            /**
             * Encodes the specified ReadStreamEvents message. Does not implicitly {@link eventstore.proto.ReadStreamEvents.verify|verify} messages.
             * @param {eventstore.proto.ReadStreamEvents$Properties} message ReadStreamEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadStreamEvents.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.eventStreamId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.fromEventNumber);
                writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.maxCount);
                writer.uint32( /* id 4, wireType 0 =*/ 32).bool(message.resolveLinkTos);
                writer.uint32( /* id 5, wireType 0 =*/ 40).bool(message.requireMaster);
                return writer;
            };

            /**
             * Encodes the specified ReadStreamEvents message, length delimited. Does not implicitly {@link eventstore.proto.ReadStreamEvents.verify|verify} messages.
             * @param {eventstore.proto.ReadStreamEvents$Properties} message ReadStreamEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadStreamEvents.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadStreamEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadStreamEvents.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ReadStreamEvents();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.eventStreamId = reader.string();
                            break;
                        case 2:
                            message.fromEventNumber = reader.int32();
                            break;
                        case 3:
                            message.maxCount = reader.int32();
                            break;
                        case 4:
                            message.resolveLinkTos = reader.bool();
                            break;
                        case 5:
                            message.requireMaster = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("fromEventNumber"))
                    throw $util.ProtocolError("missing required 'fromEventNumber'", { instance: message });
                if (!message.hasOwnProperty("maxCount"))
                    throw $util.ProtocolError("missing required 'maxCount'", { instance: message });
                if (!message.hasOwnProperty("resolveLinkTos"))
                    throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                if (!message.hasOwnProperty("requireMaster"))
                    throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                return message;
            };

            /**
             * Decodes a ReadStreamEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadStreamEvents.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadStreamEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ReadStreamEvents.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (!$util.isInteger(message.fromEventNumber))
                    return "fromEventNumber: integer expected";
                if (!$util.isInteger(message.maxCount))
                    return "maxCount: integer expected";
                if (typeof message.resolveLinkTos !== "boolean")
                    return "resolveLinkTos: boolean expected";
                if (typeof message.requireMaster !== "boolean")
                    return "requireMaster: boolean expected";
                return null;
            };

            /**
             * Creates a ReadStreamEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents
             */
            ReadStreamEvents.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ReadStreamEvents)
                    return object;
                var message = new $root.eventstore.proto.ReadStreamEvents();
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.fromEventNumber != null)
                    message.fromEventNumber = object.fromEventNumber | 0;
                if (object.maxCount != null)
                    message.maxCount = object.maxCount | 0;
                if (object.resolveLinkTos != null)
                    message.resolveLinkTos = Boolean(object.resolveLinkTos);
                if (object.requireMaster != null)
                    message.requireMaster = Boolean(object.requireMaster);
                return message;
            };

            /**
             * Creates a ReadStreamEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadStreamEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents
             */
            ReadStreamEvents.from = ReadStreamEvents.fromObject;

            /**
             * Creates a plain object from a ReadStreamEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadStreamEvents} message ReadStreamEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadStreamEvents.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.eventStreamId = "";
                    object.fromEventNumber = 0;
                    object.maxCount = 0;
                    object.resolveLinkTos = false;
                    object.requireMaster = false;
                }
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.fromEventNumber != null && message.hasOwnProperty("fromEventNumber"))
                    object.fromEventNumber = message.fromEventNumber;
                if (message.maxCount != null && message.hasOwnProperty("maxCount"))
                    object.maxCount = message.maxCount;
                if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                    object.resolveLinkTos = message.resolveLinkTos;
                if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                    object.requireMaster = message.requireMaster;
                return object;
            };

            /**
             * Creates a plain object from this ReadStreamEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadStreamEvents.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ReadStreamEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ReadStreamEvents.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReadStreamEvents;
        })();

        proto.ReadStreamEventsCompleted = (function() {

            /**
             * Properties of a ReadStreamEventsCompleted.
             * @typedef eventstore.proto.ReadStreamEventsCompleted$Properties
             * @type {Object}
             * @property {Array.<eventstore.proto.ResolvedIndexedEvent$Properties>} [events] ReadStreamEventsCompleted events.
             * @property {eventstore.proto.ReadStreamEventsCompleted.ReadStreamResult} result ReadStreamEventsCompleted result.
             * @property {number} nextEventNumber ReadStreamEventsCompleted nextEventNumber.
             * @property {number} lastEventNumber ReadStreamEventsCompleted lastEventNumber.
             * @property {boolean} isEndOfStream ReadStreamEventsCompleted isEndOfStream.
             * @property {number|Long} lastCommitPosition ReadStreamEventsCompleted lastCommitPosition.
             * @property {string} [error] ReadStreamEventsCompleted error.
             */

            /**
             * Constructs a new ReadStreamEventsCompleted.
             * @exports eventstore.proto.ReadStreamEventsCompleted
             * @constructor
             * @param {eventstore.proto.ReadStreamEventsCompleted$Properties=} [properties] Properties to set
             */
            function ReadStreamEventsCompleted(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadStreamEventsCompleted events.
             * @type {Array.<eventstore.proto.ResolvedIndexedEvent$Properties>}
             */
            ReadStreamEventsCompleted.prototype.events = $util.emptyArray;

            /**
             * ReadStreamEventsCompleted result.
             * @type {eventstore.proto.ReadStreamEventsCompleted.ReadStreamResult}
             */
            ReadStreamEventsCompleted.prototype.result = 0;

            /**
             * ReadStreamEventsCompleted nextEventNumber.
             * @type {number}
             */
            ReadStreamEventsCompleted.prototype.nextEventNumber = 0;

            /**
             * ReadStreamEventsCompleted lastEventNumber.
             * @type {number}
             */
            ReadStreamEventsCompleted.prototype.lastEventNumber = 0;

            /**
             * ReadStreamEventsCompleted isEndOfStream.
             * @type {boolean}
             */
            ReadStreamEventsCompleted.prototype.isEndOfStream = false;

            /**
             * ReadStreamEventsCompleted lastCommitPosition.
             * @type {number|Long}
             */
            ReadStreamEventsCompleted.prototype.lastCommitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * ReadStreamEventsCompleted error.
             * @type {string}
             */
            ReadStreamEventsCompleted.prototype.error = "";

            /**
             * Creates a new ReadStreamEventsCompleted instance using the specified properties.
             * @param {eventstore.proto.ReadStreamEventsCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted instance
             */
            ReadStreamEventsCompleted.create = function create(properties) {
                return new ReadStreamEventsCompleted(properties);
            };

            /**
             * Encodes the specified ReadStreamEventsCompleted message. Does not implicitly {@link eventstore.proto.ReadStreamEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadStreamEventsCompleted$Properties} message ReadStreamEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadStreamEventsCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.eventstore.proto.ResolvedIndexedEvent.encode(message.events[i], writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
                writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.result);
                writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.nextEventNumber);
                writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.lastEventNumber);
                writer.uint32( /* id 5, wireType 0 =*/ 40).bool(message.isEndOfStream);
                writer.uint32( /* id 6, wireType 0 =*/ 48).int64(message.lastCommitPosition);
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32( /* id 7, wireType 2 =*/ 58).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified ReadStreamEventsCompleted message, length delimited. Does not implicitly {@link eventstore.proto.ReadStreamEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadStreamEventsCompleted$Properties} message ReadStreamEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadStreamEventsCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadStreamEventsCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadStreamEventsCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ReadStreamEventsCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push($root.eventstore.proto.ResolvedIndexedEvent.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.result = reader.uint32();
                            break;
                        case 3:
                            message.nextEventNumber = reader.int32();
                            break;
                        case 4:
                            message.lastEventNumber = reader.int32();
                            break;
                        case 5:
                            message.isEndOfStream = reader.bool();
                            break;
                        case 6:
                            message.lastCommitPosition = reader.int64();
                            break;
                        case 7:
                            message.error = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("nextEventNumber"))
                    throw $util.ProtocolError("missing required 'nextEventNumber'", { instance: message });
                if (!message.hasOwnProperty("lastEventNumber"))
                    throw $util.ProtocolError("missing required 'lastEventNumber'", { instance: message });
                if (!message.hasOwnProperty("isEndOfStream"))
                    throw $util.ProtocolError("missing required 'isEndOfStream'", { instance: message });
                if (!message.hasOwnProperty("lastCommitPosition"))
                    throw $util.ProtocolError("missing required 'lastCommitPosition'", { instance: message });
                return message;
            };

            /**
             * Decodes a ReadStreamEventsCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadStreamEventsCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadStreamEventsCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ReadStreamEventsCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.eventstore.proto.ResolvedIndexedEvent.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            break;
                }
                if (!$util.isInteger(message.nextEventNumber))
                    return "nextEventNumber: integer expected";
                if (!$util.isInteger(message.lastEventNumber))
                    return "lastEventNumber: integer expected";
                if (typeof message.isEndOfStream !== "boolean")
                    return "isEndOfStream: boolean expected";
                if (!$util.isInteger(message.lastCommitPosition) && !(message.lastCommitPosition && $util.isInteger(message.lastCommitPosition.low) && $util.isInteger(message.lastCommitPosition.high)))
                    return "lastCommitPosition: integer|Long expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates a ReadStreamEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted
             */
            ReadStreamEventsCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ReadStreamEventsCompleted)
                    return object;
                var message = new $root.eventstore.proto.ReadStreamEventsCompleted();
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".eventstore.proto.ReadStreamEventsCompleted.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".eventstore.proto.ReadStreamEventsCompleted.events: object expected");
                        message.events[i] = $root.eventstore.proto.ResolvedIndexedEvent.fromObject(object.events[i]);
                    }
                }
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "NoStream":
                    case 1:
                        message.result = 1;
                        break;
                    case "StreamDeleted":
                    case 2:
                        message.result = 2;
                        break;
                    case "NotModified":
                    case 3:
                        message.result = 3;
                        break;
                    case "Error":
                    case 4:
                        message.result = 4;
                        break;
                    case "AccessDenied":
                    case 5:
                        message.result = 5;
                        break;
                }
                if (object.nextEventNumber != null)
                    message.nextEventNumber = object.nextEventNumber | 0;
                if (object.lastEventNumber != null)
                    message.lastEventNumber = object.lastEventNumber | 0;
                if (object.isEndOfStream != null)
                    message.isEndOfStream = Boolean(object.isEndOfStream);
                if (object.lastCommitPosition != null)
                    if ($util.Long)
                        (message.lastCommitPosition = $util.Long.fromValue(object.lastCommitPosition)).unsigned = false;
                    else if (typeof object.lastCommitPosition === "string")
                    message.lastCommitPosition = parseInt(object.lastCommitPosition, 10);
                else if (typeof object.lastCommitPosition === "number")
                    message.lastCommitPosition = object.lastCommitPosition;
                else if (typeof object.lastCommitPosition === "object")
                    message.lastCommitPosition = new $util.LongBits(object.lastCommitPosition.low >>> 0, object.lastCommitPosition.high >>> 0).toNumber();
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a ReadStreamEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadStreamEventsCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted
             */
            ReadStreamEventsCompleted.from = ReadStreamEventsCompleted.fromObject;

            /**
             * Creates a plain object from a ReadStreamEventsCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadStreamEventsCompleted} message ReadStreamEventsCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadStreamEventsCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (options.defaults) {
                    object.result = options.enums === String ? "Success" : 0;
                    object.nextEventNumber = 0;
                    object.lastEventNumber = 0;
                    object.isEndOfStream = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.lastCommitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastCommitPosition = options.longs === String ? "0" : 0;
                    object.error = "";
                }
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.eventstore.proto.ResolvedIndexedEvent.toObject(message.events[j], options);
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.ReadStreamEventsCompleted.ReadStreamResult[message.result] : message.result;
                if (message.nextEventNumber != null && message.hasOwnProperty("nextEventNumber"))
                    object.nextEventNumber = message.nextEventNumber;
                if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                    object.lastEventNumber = message.lastEventNumber;
                if (message.isEndOfStream != null && message.hasOwnProperty("isEndOfStream"))
                    object.isEndOfStream = message.isEndOfStream;
                if (message.lastCommitPosition != null && message.hasOwnProperty("lastCommitPosition"))
                    if (typeof message.lastCommitPosition === "number")
                        object.lastCommitPosition = options.longs === String ? String(message.lastCommitPosition) : message.lastCommitPosition;
                    else
                        object.lastCommitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.lastCommitPosition) : options.longs === Number ? new $util.LongBits(message.lastCommitPosition.low >>> 0, message.lastCommitPosition.high >>> 0).toNumber() : message.lastCommitPosition;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Creates a plain object from this ReadStreamEventsCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadStreamEventsCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ReadStreamEventsCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ReadStreamEventsCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * ReadStreamResult enum.
             * @name ReadStreamResult
             * @memberof eventstore.proto.ReadStreamEventsCompleted
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} NoStream=1 NoStream value
             * @property {number} StreamDeleted=2 StreamDeleted value
             * @property {number} NotModified=3 NotModified value
             * @property {number} Error=4 Error value
             * @property {number} AccessDenied=5 AccessDenied value
             */
            ReadStreamEventsCompleted.ReadStreamResult = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "NoStream"] = 1;
                values[valuesById[2] = "StreamDeleted"] = 2;
                values[valuesById[3] = "NotModified"] = 3;
                values[valuesById[4] = "Error"] = 4;
                values[valuesById[5] = "AccessDenied"] = 5;
                return values;
            })();

            return ReadStreamEventsCompleted;
        })();

        proto.ReadAllEvents = (function() {

            /**
             * Properties of a ReadAllEvents.
             * @typedef eventstore.proto.ReadAllEvents$Properties
             * @type {Object}
             * @property {number|Long} commitPosition ReadAllEvents commitPosition.
             * @property {number|Long} preparePosition ReadAllEvents preparePosition.
             * @property {number} maxCount ReadAllEvents maxCount.
             * @property {boolean} resolveLinkTos ReadAllEvents resolveLinkTos.
             * @property {boolean} requireMaster ReadAllEvents requireMaster.
             */

            /**
             * Constructs a new ReadAllEvents.
             * @exports eventstore.proto.ReadAllEvents
             * @constructor
             * @param {eventstore.proto.ReadAllEvents$Properties=} [properties] Properties to set
             */
            function ReadAllEvents(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadAllEvents commitPosition.
             * @type {number|Long}
             */
            ReadAllEvents.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * ReadAllEvents preparePosition.
             * @type {number|Long}
             */
            ReadAllEvents.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * ReadAllEvents maxCount.
             * @type {number}
             */
            ReadAllEvents.prototype.maxCount = 0;

            /**
             * ReadAllEvents resolveLinkTos.
             * @type {boolean}
             */
            ReadAllEvents.prototype.resolveLinkTos = false;

            /**
             * ReadAllEvents requireMaster.
             * @type {boolean}
             */
            ReadAllEvents.prototype.requireMaster = false;

            /**
             * Creates a new ReadAllEvents instance using the specified properties.
             * @param {eventstore.proto.ReadAllEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents instance
             */
            ReadAllEvents.create = function create(properties) {
                return new ReadAllEvents(properties);
            };

            /**
             * Encodes the specified ReadAllEvents message. Does not implicitly {@link eventstore.proto.ReadAllEvents.verify|verify} messages.
             * @param {eventstore.proto.ReadAllEvents$Properties} message ReadAllEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadAllEvents.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).int64(message.commitPosition);
                writer.uint32( /* id 2, wireType 0 =*/ 16).int64(message.preparePosition);
                writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.maxCount);
                writer.uint32( /* id 4, wireType 0 =*/ 32).bool(message.resolveLinkTos);
                writer.uint32( /* id 5, wireType 0 =*/ 40).bool(message.requireMaster);
                return writer;
            };

            /**
             * Encodes the specified ReadAllEvents message, length delimited. Does not implicitly {@link eventstore.proto.ReadAllEvents.verify|verify} messages.
             * @param {eventstore.proto.ReadAllEvents$Properties} message ReadAllEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadAllEvents.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadAllEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadAllEvents.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ReadAllEvents();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.commitPosition = reader.int64();
                            break;
                        case 2:
                            message.preparePosition = reader.int64();
                            break;
                        case 3:
                            message.maxCount = reader.int32();
                            break;
                        case 4:
                            message.resolveLinkTos = reader.bool();
                            break;
                        case 5:
                            message.requireMaster = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("commitPosition"))
                    throw $util.ProtocolError("missing required 'commitPosition'", { instance: message });
                if (!message.hasOwnProperty("preparePosition"))
                    throw $util.ProtocolError("missing required 'preparePosition'", { instance: message });
                if (!message.hasOwnProperty("maxCount"))
                    throw $util.ProtocolError("missing required 'maxCount'", { instance: message });
                if (!message.hasOwnProperty("resolveLinkTos"))
                    throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                if (!message.hasOwnProperty("requireMaster"))
                    throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                return message;
            };

            /**
             * Decodes a ReadAllEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadAllEvents.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadAllEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ReadAllEvents.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                    return "commitPosition: integer|Long expected";
                if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                    return "preparePosition: integer|Long expected";
                if (!$util.isInteger(message.maxCount))
                    return "maxCount: integer expected";
                if (typeof message.resolveLinkTos !== "boolean")
                    return "resolveLinkTos: boolean expected";
                if (typeof message.requireMaster !== "boolean")
                    return "requireMaster: boolean expected";
                return null;
            };

            /**
             * Creates a ReadAllEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents
             */
            ReadAllEvents.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ReadAllEvents)
                    return object;
                var message = new $root.eventstore.proto.ReadAllEvents();
                if (object.commitPosition != null)
                    if ($util.Long)
                        (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                    else if (typeof object.commitPosition === "string")
                    message.commitPosition = parseInt(object.commitPosition, 10);
                else if (typeof object.commitPosition === "number")
                    message.commitPosition = object.commitPosition;
                else if (typeof object.commitPosition === "object")
                    message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                if (object.preparePosition != null)
                    if ($util.Long)
                        (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                    else if (typeof object.preparePosition === "string")
                    message.preparePosition = parseInt(object.preparePosition, 10);
                else if (typeof object.preparePosition === "number")
                    message.preparePosition = object.preparePosition;
                else if (typeof object.preparePosition === "object")
                    message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                if (object.maxCount != null)
                    message.maxCount = object.maxCount | 0;
                if (object.resolveLinkTos != null)
                    message.resolveLinkTos = Boolean(object.resolveLinkTos);
                if (object.requireMaster != null)
                    message.requireMaster = Boolean(object.requireMaster);
                return message;
            };

            /**
             * Creates a ReadAllEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadAllEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents
             */
            ReadAllEvents.from = ReadAllEvents.fromObject;

            /**
             * Creates a plain object from a ReadAllEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadAllEvents} message ReadAllEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadAllEvents.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.commitPosition = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.preparePosition = options.longs === String ? "0" : 0;
                    object.maxCount = 0;
                    object.resolveLinkTos = false;
                    object.requireMaster = false;
                }
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    if (typeof message.commitPosition === "number")
                        object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                    else
                        object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    if (typeof message.preparePosition === "number")
                        object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                    else
                        object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                if (message.maxCount != null && message.hasOwnProperty("maxCount"))
                    object.maxCount = message.maxCount;
                if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                    object.resolveLinkTos = message.resolveLinkTos;
                if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                    object.requireMaster = message.requireMaster;
                return object;
            };

            /**
             * Creates a plain object from this ReadAllEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadAllEvents.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ReadAllEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ReadAllEvents.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReadAllEvents;
        })();

        proto.ReadAllEventsCompleted = (function() {

            /**
             * Properties of a ReadAllEventsCompleted.
             * @typedef eventstore.proto.ReadAllEventsCompleted$Properties
             * @type {Object}
             * @property {number|Long} commitPosition ReadAllEventsCompleted commitPosition.
             * @property {number|Long} preparePosition ReadAllEventsCompleted preparePosition.
             * @property {Array.<eventstore.proto.ResolvedEvent$Properties>} [events] ReadAllEventsCompleted events.
             * @property {number|Long} nextCommitPosition ReadAllEventsCompleted nextCommitPosition.
             * @property {number|Long} nextPreparePosition ReadAllEventsCompleted nextPreparePosition.
             * @property {eventstore.proto.ReadAllEventsCompleted.ReadAllResult} [result] ReadAllEventsCompleted result.
             * @property {string} [error] ReadAllEventsCompleted error.
             */

            /**
             * Constructs a new ReadAllEventsCompleted.
             * @exports eventstore.proto.ReadAllEventsCompleted
             * @constructor
             * @param {eventstore.proto.ReadAllEventsCompleted$Properties=} [properties] Properties to set
             */
            function ReadAllEventsCompleted(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadAllEventsCompleted commitPosition.
             * @type {number|Long}
             */
            ReadAllEventsCompleted.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * ReadAllEventsCompleted preparePosition.
             * @type {number|Long}
             */
            ReadAllEventsCompleted.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * ReadAllEventsCompleted events.
             * @type {Array.<eventstore.proto.ResolvedEvent$Properties>}
             */
            ReadAllEventsCompleted.prototype.events = $util.emptyArray;

            /**
             * ReadAllEventsCompleted nextCommitPosition.
             * @type {number|Long}
             */
            ReadAllEventsCompleted.prototype.nextCommitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * ReadAllEventsCompleted nextPreparePosition.
             * @type {number|Long}
             */
            ReadAllEventsCompleted.prototype.nextPreparePosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * ReadAllEventsCompleted result.
             * @type {eventstore.proto.ReadAllEventsCompleted.ReadAllResult}
             */
            ReadAllEventsCompleted.prototype.result = 0;

            /**
             * ReadAllEventsCompleted error.
             * @type {string}
             */
            ReadAllEventsCompleted.prototype.error = "";

            /**
             * Creates a new ReadAllEventsCompleted instance using the specified properties.
             * @param {eventstore.proto.ReadAllEventsCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted instance
             */
            ReadAllEventsCompleted.create = function create(properties) {
                return new ReadAllEventsCompleted(properties);
            };

            /**
             * Encodes the specified ReadAllEventsCompleted message. Does not implicitly {@link eventstore.proto.ReadAllEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadAllEventsCompleted$Properties} message ReadAllEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadAllEventsCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).int64(message.commitPosition);
                writer.uint32( /* id 2, wireType 0 =*/ 16).int64(message.preparePosition);
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.eventstore.proto.ResolvedEvent.encode(message.events[i], writer.uint32( /* id 3, wireType 2 =*/ 26).fork()).ldelim();
                writer.uint32( /* id 4, wireType 0 =*/ 32).int64(message.nextCommitPosition);
                writer.uint32( /* id 5, wireType 0 =*/ 40).int64(message.nextPreparePosition);
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32( /* id 6, wireType 0 =*/ 48).uint32(message.result);
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32( /* id 7, wireType 2 =*/ 58).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified ReadAllEventsCompleted message, length delimited. Does not implicitly {@link eventstore.proto.ReadAllEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadAllEventsCompleted$Properties} message ReadAllEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadAllEventsCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadAllEventsCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadAllEventsCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ReadAllEventsCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.commitPosition = reader.int64();
                            break;
                        case 2:
                            message.preparePosition = reader.int64();
                            break;
                        case 3:
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push($root.eventstore.proto.ResolvedEvent.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            message.nextCommitPosition = reader.int64();
                            break;
                        case 5:
                            message.nextPreparePosition = reader.int64();
                            break;
                        case 6:
                            message.result = reader.uint32();
                            break;
                        case 7:
                            message.error = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("commitPosition"))
                    throw $util.ProtocolError("missing required 'commitPosition'", { instance: message });
                if (!message.hasOwnProperty("preparePosition"))
                    throw $util.ProtocolError("missing required 'preparePosition'", { instance: message });
                if (!message.hasOwnProperty("nextCommitPosition"))
                    throw $util.ProtocolError("missing required 'nextCommitPosition'", { instance: message });
                if (!message.hasOwnProperty("nextPreparePosition"))
                    throw $util.ProtocolError("missing required 'nextPreparePosition'", { instance: message });
                return message;
            };

            /**
             * Decodes a ReadAllEventsCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadAllEventsCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadAllEventsCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ReadAllEventsCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                    return "commitPosition: integer|Long expected";
                if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                    return "preparePosition: integer|Long expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.eventstore.proto.ResolvedEvent.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                if (!$util.isInteger(message.nextCommitPosition) && !(message.nextCommitPosition && $util.isInteger(message.nextCommitPosition.low) && $util.isInteger(message.nextCommitPosition.high)))
                    return "nextCommitPosition: integer|Long expected";
                if (!$util.isInteger(message.nextPreparePosition) && !(message.nextPreparePosition && $util.isInteger(message.nextPreparePosition.low) && $util.isInteger(message.nextPreparePosition.high)))
                    return "nextPreparePosition: integer|Long expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    switch (message.result) {
                        default: return "result: enum value expected";
                        case 0:
                                case 1:
                                case 2:
                                case 3:
                                break;
                    }
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates a ReadAllEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted
             */
            ReadAllEventsCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ReadAllEventsCompleted)
                    return object;
                var message = new $root.eventstore.proto.ReadAllEventsCompleted();
                if (object.commitPosition != null)
                    if ($util.Long)
                        (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                    else if (typeof object.commitPosition === "string")
                    message.commitPosition = parseInt(object.commitPosition, 10);
                else if (typeof object.commitPosition === "number")
                    message.commitPosition = object.commitPosition;
                else if (typeof object.commitPosition === "object")
                    message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                if (object.preparePosition != null)
                    if ($util.Long)
                        (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                    else if (typeof object.preparePosition === "string")
                    message.preparePosition = parseInt(object.preparePosition, 10);
                else if (typeof object.preparePosition === "number")
                    message.preparePosition = object.preparePosition;
                else if (typeof object.preparePosition === "object")
                    message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".eventstore.proto.ReadAllEventsCompleted.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".eventstore.proto.ReadAllEventsCompleted.events: object expected");
                        message.events[i] = $root.eventstore.proto.ResolvedEvent.fromObject(object.events[i]);
                    }
                }
                if (object.nextCommitPosition != null)
                    if ($util.Long)
                        (message.nextCommitPosition = $util.Long.fromValue(object.nextCommitPosition)).unsigned = false;
                    else if (typeof object.nextCommitPosition === "string")
                    message.nextCommitPosition = parseInt(object.nextCommitPosition, 10);
                else if (typeof object.nextCommitPosition === "number")
                    message.nextCommitPosition = object.nextCommitPosition;
                else if (typeof object.nextCommitPosition === "object")
                    message.nextCommitPosition = new $util.LongBits(object.nextCommitPosition.low >>> 0, object.nextCommitPosition.high >>> 0).toNumber();
                if (object.nextPreparePosition != null)
                    if ($util.Long)
                        (message.nextPreparePosition = $util.Long.fromValue(object.nextPreparePosition)).unsigned = false;
                    else if (typeof object.nextPreparePosition === "string")
                    message.nextPreparePosition = parseInt(object.nextPreparePosition, 10);
                else if (typeof object.nextPreparePosition === "number")
                    message.nextPreparePosition = object.nextPreparePosition;
                else if (typeof object.nextPreparePosition === "object")
                    message.nextPreparePosition = new $util.LongBits(object.nextPreparePosition.low >>> 0, object.nextPreparePosition.high >>> 0).toNumber();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "NotModified":
                    case 1:
                        message.result = 1;
                        break;
                    case "Error":
                    case 2:
                        message.result = 2;
                        break;
                    case "AccessDenied":
                    case 3:
                        message.result = 3;
                        break;
                }
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a ReadAllEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadAllEventsCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted
             */
            ReadAllEventsCompleted.from = ReadAllEventsCompleted.fromObject;

            /**
             * Creates a plain object from a ReadAllEventsCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadAllEventsCompleted} message ReadAllEventsCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadAllEventsCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.commitPosition = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.preparePosition = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.nextCommitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.nextCommitPosition = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.nextPreparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.nextPreparePosition = options.longs === String ? "0" : 0;
                    object.result = options.enums === String ? "Success" : 0;
                    object.error = "";
                }
                if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                    if (typeof message.commitPosition === "number")
                        object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                    else
                        object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                    if (typeof message.preparePosition === "number")
                        object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                    else
                        object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.eventstore.proto.ResolvedEvent.toObject(message.events[j], options);
                }
                if (message.nextCommitPosition != null && message.hasOwnProperty("nextCommitPosition"))
                    if (typeof message.nextCommitPosition === "number")
                        object.nextCommitPosition = options.longs === String ? String(message.nextCommitPosition) : message.nextCommitPosition;
                    else
                        object.nextCommitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.nextCommitPosition) : options.longs === Number ? new $util.LongBits(message.nextCommitPosition.low >>> 0, message.nextCommitPosition.high >>> 0).toNumber() : message.nextCommitPosition;
                if (message.nextPreparePosition != null && message.hasOwnProperty("nextPreparePosition"))
                    if (typeof message.nextPreparePosition === "number")
                        object.nextPreparePosition = options.longs === String ? String(message.nextPreparePosition) : message.nextPreparePosition;
                    else
                        object.nextPreparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.nextPreparePosition) : options.longs === Number ? new $util.LongBits(message.nextPreparePosition.low >>> 0, message.nextPreparePosition.high >>> 0).toNumber() : message.nextPreparePosition;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.ReadAllEventsCompleted.ReadAllResult[message.result] : message.result;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Creates a plain object from this ReadAllEventsCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadAllEventsCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ReadAllEventsCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ReadAllEventsCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * ReadAllResult enum.
             * @name ReadAllResult
             * @memberof eventstore.proto.ReadAllEventsCompleted
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} NotModified=1 NotModified value
             * @property {number} Error=2 Error value
             * @property {number} AccessDenied=3 AccessDenied value
             */
            ReadAllEventsCompleted.ReadAllResult = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "NotModified"] = 1;
                values[valuesById[2] = "Error"] = 2;
                values[valuesById[3] = "AccessDenied"] = 3;
                return values;
            })();

            return ReadAllEventsCompleted;
        })();

        proto.CreatePersistentSubscription = (function() {

            /**
             * Properties of a CreatePersistentSubscription.
             * @typedef eventstore.proto.CreatePersistentSubscription$Properties
             * @type {Object}
             * @property {string} subscriptionGroupName CreatePersistentSubscription subscriptionGroupName.
             * @property {string} eventStreamId CreatePersistentSubscription eventStreamId.
             * @property {boolean} resolveLinkTos CreatePersistentSubscription resolveLinkTos.
             * @property {number} startFrom CreatePersistentSubscription startFrom.
             * @property {number} messageTimeoutMilliseconds CreatePersistentSubscription messageTimeoutMilliseconds.
             * @property {boolean} recordStatistics CreatePersistentSubscription recordStatistics.
             * @property {number} liveBufferSize CreatePersistentSubscription liveBufferSize.
             * @property {number} readBatchSize CreatePersistentSubscription readBatchSize.
             * @property {number} bufferSize CreatePersistentSubscription bufferSize.
             * @property {number} maxRetryCount CreatePersistentSubscription maxRetryCount.
             * @property {boolean} preferRoundRobin CreatePersistentSubscription preferRoundRobin.
             * @property {number} checkpointAfterTime CreatePersistentSubscription checkpointAfterTime.
             * @property {number} checkpointMaxCount CreatePersistentSubscription checkpointMaxCount.
             * @property {number} checkpointMinCount CreatePersistentSubscription checkpointMinCount.
             * @property {number} subscriberMaxCount CreatePersistentSubscription subscriberMaxCount.
             * @property {string} [namedConsumerStrategy] CreatePersistentSubscription namedConsumerStrategy.
             */

            /**
             * Constructs a new CreatePersistentSubscription.
             * @exports eventstore.proto.CreatePersistentSubscription
             * @constructor
             * @param {eventstore.proto.CreatePersistentSubscription$Properties=} [properties] Properties to set
             */
            function CreatePersistentSubscription(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreatePersistentSubscription subscriptionGroupName.
             * @type {string}
             */
            CreatePersistentSubscription.prototype.subscriptionGroupName = "";

            /**
             * CreatePersistentSubscription eventStreamId.
             * @type {string}
             */
            CreatePersistentSubscription.prototype.eventStreamId = "";

            /**
             * CreatePersistentSubscription resolveLinkTos.
             * @type {boolean}
             */
            CreatePersistentSubscription.prototype.resolveLinkTos = false;

            /**
             * CreatePersistentSubscription startFrom.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.startFrom = 0;

            /**
             * CreatePersistentSubscription messageTimeoutMilliseconds.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.messageTimeoutMilliseconds = 0;

            /**
             * CreatePersistentSubscription recordStatistics.
             * @type {boolean}
             */
            CreatePersistentSubscription.prototype.recordStatistics = false;

            /**
             * CreatePersistentSubscription liveBufferSize.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.liveBufferSize = 0;

            /**
             * CreatePersistentSubscription readBatchSize.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.readBatchSize = 0;

            /**
             * CreatePersistentSubscription bufferSize.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.bufferSize = 0;

            /**
             * CreatePersistentSubscription maxRetryCount.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.maxRetryCount = 0;

            /**
             * CreatePersistentSubscription preferRoundRobin.
             * @type {boolean}
             */
            CreatePersistentSubscription.prototype.preferRoundRobin = false;

            /**
             * CreatePersistentSubscription checkpointAfterTime.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.checkpointAfterTime = 0;

            /**
             * CreatePersistentSubscription checkpointMaxCount.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.checkpointMaxCount = 0;

            /**
             * CreatePersistentSubscription checkpointMinCount.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.checkpointMinCount = 0;

            /**
             * CreatePersistentSubscription subscriberMaxCount.
             * @type {number}
             */
            CreatePersistentSubscription.prototype.subscriberMaxCount = 0;

            /**
             * CreatePersistentSubscription namedConsumerStrategy.
             * @type {string}
             */
            CreatePersistentSubscription.prototype.namedConsumerStrategy = "";

            /**
             * Creates a new CreatePersistentSubscription instance using the specified properties.
             * @param {eventstore.proto.CreatePersistentSubscription$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription instance
             */
            CreatePersistentSubscription.create = function create(properties) {
                return new CreatePersistentSubscription(properties);
            };

            /**
             * Encodes the specified CreatePersistentSubscription message. Does not implicitly {@link eventstore.proto.CreatePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.CreatePersistentSubscription$Properties} message CreatePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePersistentSubscription.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.subscriptionGroupName);
                writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.eventStreamId);
                writer.uint32( /* id 3, wireType 0 =*/ 24).bool(message.resolveLinkTos);
                writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.startFrom);
                writer.uint32( /* id 5, wireType 0 =*/ 40).int32(message.messageTimeoutMilliseconds);
                writer.uint32( /* id 6, wireType 0 =*/ 48).bool(message.recordStatistics);
                writer.uint32( /* id 7, wireType 0 =*/ 56).int32(message.liveBufferSize);
                writer.uint32( /* id 8, wireType 0 =*/ 64).int32(message.readBatchSize);
                writer.uint32( /* id 9, wireType 0 =*/ 72).int32(message.bufferSize);
                writer.uint32( /* id 10, wireType 0 =*/ 80).int32(message.maxRetryCount);
                writer.uint32( /* id 11, wireType 0 =*/ 88).bool(message.preferRoundRobin);
                writer.uint32( /* id 12, wireType 0 =*/ 96).int32(message.checkpointAfterTime);
                writer.uint32( /* id 13, wireType 0 =*/ 104).int32(message.checkpointMaxCount);
                writer.uint32( /* id 14, wireType 0 =*/ 112).int32(message.checkpointMinCount);
                writer.uint32( /* id 15, wireType 0 =*/ 120).int32(message.subscriberMaxCount);
                if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                    writer.uint32( /* id 16, wireType 2 =*/ 130).string(message.namedConsumerStrategy);
                return writer;
            };

            /**
             * Encodes the specified CreatePersistentSubscription message, length delimited. Does not implicitly {@link eventstore.proto.CreatePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.CreatePersistentSubscription$Properties} message CreatePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePersistentSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreatePersistentSubscription message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePersistentSubscription.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.CreatePersistentSubscription();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.subscriptionGroupName = reader.string();
                            break;
                        case 2:
                            message.eventStreamId = reader.string();
                            break;
                        case 3:
                            message.resolveLinkTos = reader.bool();
                            break;
                        case 4:
                            message.startFrom = reader.int32();
                            break;
                        case 5:
                            message.messageTimeoutMilliseconds = reader.int32();
                            break;
                        case 6:
                            message.recordStatistics = reader.bool();
                            break;
                        case 7:
                            message.liveBufferSize = reader.int32();
                            break;
                        case 8:
                            message.readBatchSize = reader.int32();
                            break;
                        case 9:
                            message.bufferSize = reader.int32();
                            break;
                        case 10:
                            message.maxRetryCount = reader.int32();
                            break;
                        case 11:
                            message.preferRoundRobin = reader.bool();
                            break;
                        case 12:
                            message.checkpointAfterTime = reader.int32();
                            break;
                        case 13:
                            message.checkpointMaxCount = reader.int32();
                            break;
                        case 14:
                            message.checkpointMinCount = reader.int32();
                            break;
                        case 15:
                            message.subscriberMaxCount = reader.int32();
                            break;
                        case 16:
                            message.namedConsumerStrategy = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("subscriptionGroupName"))
                    throw $util.ProtocolError("missing required 'subscriptionGroupName'", { instance: message });
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("resolveLinkTos"))
                    throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                if (!message.hasOwnProperty("startFrom"))
                    throw $util.ProtocolError("missing required 'startFrom'", { instance: message });
                if (!message.hasOwnProperty("messageTimeoutMilliseconds"))
                    throw $util.ProtocolError("missing required 'messageTimeoutMilliseconds'", { instance: message });
                if (!message.hasOwnProperty("recordStatistics"))
                    throw $util.ProtocolError("missing required 'recordStatistics'", { instance: message });
                if (!message.hasOwnProperty("liveBufferSize"))
                    throw $util.ProtocolError("missing required 'liveBufferSize'", { instance: message });
                if (!message.hasOwnProperty("readBatchSize"))
                    throw $util.ProtocolError("missing required 'readBatchSize'", { instance: message });
                if (!message.hasOwnProperty("bufferSize"))
                    throw $util.ProtocolError("missing required 'bufferSize'", { instance: message });
                if (!message.hasOwnProperty("maxRetryCount"))
                    throw $util.ProtocolError("missing required 'maxRetryCount'", { instance: message });
                if (!message.hasOwnProperty("preferRoundRobin"))
                    throw $util.ProtocolError("missing required 'preferRoundRobin'", { instance: message });
                if (!message.hasOwnProperty("checkpointAfterTime"))
                    throw $util.ProtocolError("missing required 'checkpointAfterTime'", { instance: message });
                if (!message.hasOwnProperty("checkpointMaxCount"))
                    throw $util.ProtocolError("missing required 'checkpointMaxCount'", { instance: message });
                if (!message.hasOwnProperty("checkpointMinCount"))
                    throw $util.ProtocolError("missing required 'checkpointMinCount'", { instance: message });
                if (!message.hasOwnProperty("subscriberMaxCount"))
                    throw $util.ProtocolError("missing required 'subscriberMaxCount'", { instance: message });
                return message;
            };

            /**
             * Decodes a CreatePersistentSubscription message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePersistentSubscription.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreatePersistentSubscription message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            CreatePersistentSubscription.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.subscriptionGroupName))
                    return "subscriptionGroupName: string expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (typeof message.resolveLinkTos !== "boolean")
                    return "resolveLinkTos: boolean expected";
                if (!$util.isInteger(message.startFrom))
                    return "startFrom: integer expected";
                if (!$util.isInteger(message.messageTimeoutMilliseconds))
                    return "messageTimeoutMilliseconds: integer expected";
                if (typeof message.recordStatistics !== "boolean")
                    return "recordStatistics: boolean expected";
                if (!$util.isInteger(message.liveBufferSize))
                    return "liveBufferSize: integer expected";
                if (!$util.isInteger(message.readBatchSize))
                    return "readBatchSize: integer expected";
                if (!$util.isInteger(message.bufferSize))
                    return "bufferSize: integer expected";
                if (!$util.isInteger(message.maxRetryCount))
                    return "maxRetryCount: integer expected";
                if (typeof message.preferRoundRobin !== "boolean")
                    return "preferRoundRobin: boolean expected";
                if (!$util.isInteger(message.checkpointAfterTime))
                    return "checkpointAfterTime: integer expected";
                if (!$util.isInteger(message.checkpointMaxCount))
                    return "checkpointMaxCount: integer expected";
                if (!$util.isInteger(message.checkpointMinCount))
                    return "checkpointMinCount: integer expected";
                if (!$util.isInteger(message.subscriberMaxCount))
                    return "subscriberMaxCount: integer expected";
                if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                    if (!$util.isString(message.namedConsumerStrategy))
                        return "namedConsumerStrategy: string expected";
                return null;
            };

            /**
             * Creates a CreatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription
             */
            CreatePersistentSubscription.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.CreatePersistentSubscription)
                    return object;
                var message = new $root.eventstore.proto.CreatePersistentSubscription();
                if (object.subscriptionGroupName != null)
                    message.subscriptionGroupName = String(object.subscriptionGroupName);
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.resolveLinkTos != null)
                    message.resolveLinkTos = Boolean(object.resolveLinkTos);
                if (object.startFrom != null)
                    message.startFrom = object.startFrom | 0;
                if (object.messageTimeoutMilliseconds != null)
                    message.messageTimeoutMilliseconds = object.messageTimeoutMilliseconds | 0;
                if (object.recordStatistics != null)
                    message.recordStatistics = Boolean(object.recordStatistics);
                if (object.liveBufferSize != null)
                    message.liveBufferSize = object.liveBufferSize | 0;
                if (object.readBatchSize != null)
                    message.readBatchSize = object.readBatchSize | 0;
                if (object.bufferSize != null)
                    message.bufferSize = object.bufferSize | 0;
                if (object.maxRetryCount != null)
                    message.maxRetryCount = object.maxRetryCount | 0;
                if (object.preferRoundRobin != null)
                    message.preferRoundRobin = Boolean(object.preferRoundRobin);
                if (object.checkpointAfterTime != null)
                    message.checkpointAfterTime = object.checkpointAfterTime | 0;
                if (object.checkpointMaxCount != null)
                    message.checkpointMaxCount = object.checkpointMaxCount | 0;
                if (object.checkpointMinCount != null)
                    message.checkpointMinCount = object.checkpointMinCount | 0;
                if (object.subscriberMaxCount != null)
                    message.subscriberMaxCount = object.subscriberMaxCount | 0;
                if (object.namedConsumerStrategy != null)
                    message.namedConsumerStrategy = String(object.namedConsumerStrategy);
                return message;
            };

            /**
             * Creates a CreatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.CreatePersistentSubscription.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription
             */
            CreatePersistentSubscription.from = CreatePersistentSubscription.fromObject;

            /**
             * Creates a plain object from a CreatePersistentSubscription message. Also converts values to other types if specified.
             * @param {eventstore.proto.CreatePersistentSubscription} message CreatePersistentSubscription
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreatePersistentSubscription.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.subscriptionGroupName = "";
                    object.eventStreamId = "";
                    object.resolveLinkTos = false;
                    object.startFrom = 0;
                    object.messageTimeoutMilliseconds = 0;
                    object.recordStatistics = false;
                    object.liveBufferSize = 0;
                    object.readBatchSize = 0;
                    object.bufferSize = 0;
                    object.maxRetryCount = 0;
                    object.preferRoundRobin = false;
                    object.checkpointAfterTime = 0;
                    object.checkpointMaxCount = 0;
                    object.checkpointMinCount = 0;
                    object.subscriberMaxCount = 0;
                    object.namedConsumerStrategy = "";
                }
                if (message.subscriptionGroupName != null && message.hasOwnProperty("subscriptionGroupName"))
                    object.subscriptionGroupName = message.subscriptionGroupName;
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                    object.resolveLinkTos = message.resolveLinkTos;
                if (message.startFrom != null && message.hasOwnProperty("startFrom"))
                    object.startFrom = message.startFrom;
                if (message.messageTimeoutMilliseconds != null && message.hasOwnProperty("messageTimeoutMilliseconds"))
                    object.messageTimeoutMilliseconds = message.messageTimeoutMilliseconds;
                if (message.recordStatistics != null && message.hasOwnProperty("recordStatistics"))
                    object.recordStatistics = message.recordStatistics;
                if (message.liveBufferSize != null && message.hasOwnProperty("liveBufferSize"))
                    object.liveBufferSize = message.liveBufferSize;
                if (message.readBatchSize != null && message.hasOwnProperty("readBatchSize"))
                    object.readBatchSize = message.readBatchSize;
                if (message.bufferSize != null && message.hasOwnProperty("bufferSize"))
                    object.bufferSize = message.bufferSize;
                if (message.maxRetryCount != null && message.hasOwnProperty("maxRetryCount"))
                    object.maxRetryCount = message.maxRetryCount;
                if (message.preferRoundRobin != null && message.hasOwnProperty("preferRoundRobin"))
                    object.preferRoundRobin = message.preferRoundRobin;
                if (message.checkpointAfterTime != null && message.hasOwnProperty("checkpointAfterTime"))
                    object.checkpointAfterTime = message.checkpointAfterTime;
                if (message.checkpointMaxCount != null && message.hasOwnProperty("checkpointMaxCount"))
                    object.checkpointMaxCount = message.checkpointMaxCount;
                if (message.checkpointMinCount != null && message.hasOwnProperty("checkpointMinCount"))
                    object.checkpointMinCount = message.checkpointMinCount;
                if (message.subscriberMaxCount != null && message.hasOwnProperty("subscriberMaxCount"))
                    object.subscriberMaxCount = message.subscriberMaxCount;
                if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                    object.namedConsumerStrategy = message.namedConsumerStrategy;
                return object;
            };

            /**
             * Creates a plain object from this CreatePersistentSubscription message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreatePersistentSubscription.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this CreatePersistentSubscription to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            CreatePersistentSubscription.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreatePersistentSubscription;
        })();

        proto.DeletePersistentSubscription = (function() {

            /**
             * Properties of a DeletePersistentSubscription.
             * @typedef eventstore.proto.DeletePersistentSubscription$Properties
             * @type {Object}
             * @property {string} subscriptionGroupName DeletePersistentSubscription subscriptionGroupName.
             * @property {string} eventStreamId DeletePersistentSubscription eventStreamId.
             */

            /**
             * Constructs a new DeletePersistentSubscription.
             * @exports eventstore.proto.DeletePersistentSubscription
             * @constructor
             * @param {eventstore.proto.DeletePersistentSubscription$Properties=} [properties] Properties to set
             */
            function DeletePersistentSubscription(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeletePersistentSubscription subscriptionGroupName.
             * @type {string}
             */
            DeletePersistentSubscription.prototype.subscriptionGroupName = "";

            /**
             * DeletePersistentSubscription eventStreamId.
             * @type {string}
             */
            DeletePersistentSubscription.prototype.eventStreamId = "";

            /**
             * Creates a new DeletePersistentSubscription instance using the specified properties.
             * @param {eventstore.proto.DeletePersistentSubscription$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription instance
             */
            DeletePersistentSubscription.create = function create(properties) {
                return new DeletePersistentSubscription(properties);
            };

            /**
             * Encodes the specified DeletePersistentSubscription message. Does not implicitly {@link eventstore.proto.DeletePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.DeletePersistentSubscription$Properties} message DeletePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeletePersistentSubscription.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.subscriptionGroupName);
                writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.eventStreamId);
                return writer;
            };

            /**
             * Encodes the specified DeletePersistentSubscription message, length delimited. Does not implicitly {@link eventstore.proto.DeletePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.DeletePersistentSubscription$Properties} message DeletePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeletePersistentSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeletePersistentSubscription message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeletePersistentSubscription.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.DeletePersistentSubscription();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.subscriptionGroupName = reader.string();
                            break;
                        case 2:
                            message.eventStreamId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("subscriptionGroupName"))
                    throw $util.ProtocolError("missing required 'subscriptionGroupName'", { instance: message });
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                return message;
            };

            /**
             * Decodes a DeletePersistentSubscription message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeletePersistentSubscription.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeletePersistentSubscription message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            DeletePersistentSubscription.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.subscriptionGroupName))
                    return "subscriptionGroupName: string expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                return null;
            };

            /**
             * Creates a DeletePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription
             */
            DeletePersistentSubscription.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.DeletePersistentSubscription)
                    return object;
                var message = new $root.eventstore.proto.DeletePersistentSubscription();
                if (object.subscriptionGroupName != null)
                    message.subscriptionGroupName = String(object.subscriptionGroupName);
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                return message;
            };

            /**
             * Creates a DeletePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.DeletePersistentSubscription.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription
             */
            DeletePersistentSubscription.from = DeletePersistentSubscription.fromObject;

            /**
             * Creates a plain object from a DeletePersistentSubscription message. Also converts values to other types if specified.
             * @param {eventstore.proto.DeletePersistentSubscription} message DeletePersistentSubscription
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeletePersistentSubscription.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.subscriptionGroupName = "";
                    object.eventStreamId = "";
                }
                if (message.subscriptionGroupName != null && message.hasOwnProperty("subscriptionGroupName"))
                    object.subscriptionGroupName = message.subscriptionGroupName;
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                return object;
            };

            /**
             * Creates a plain object from this DeletePersistentSubscription message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeletePersistentSubscription.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this DeletePersistentSubscription to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            DeletePersistentSubscription.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeletePersistentSubscription;
        })();

        proto.UpdatePersistentSubscription = (function() {

            /**
             * Properties of an UpdatePersistentSubscription.
             * @typedef eventstore.proto.UpdatePersistentSubscription$Properties
             * @type {Object}
             * @property {string} subscriptionGroupName UpdatePersistentSubscription subscriptionGroupName.
             * @property {string} eventStreamId UpdatePersistentSubscription eventStreamId.
             * @property {boolean} resolveLinkTos UpdatePersistentSubscription resolveLinkTos.
             * @property {number} startFrom UpdatePersistentSubscription startFrom.
             * @property {number} messageTimeoutMilliseconds UpdatePersistentSubscription messageTimeoutMilliseconds.
             * @property {boolean} recordStatistics UpdatePersistentSubscription recordStatistics.
             * @property {number} liveBufferSize UpdatePersistentSubscription liveBufferSize.
             * @property {number} readBatchSize UpdatePersistentSubscription readBatchSize.
             * @property {number} bufferSize UpdatePersistentSubscription bufferSize.
             * @property {number} maxRetryCount UpdatePersistentSubscription maxRetryCount.
             * @property {boolean} preferRoundRobin UpdatePersistentSubscription preferRoundRobin.
             * @property {number} checkpointAfterTime UpdatePersistentSubscription checkpointAfterTime.
             * @property {number} checkpointMaxCount UpdatePersistentSubscription checkpointMaxCount.
             * @property {number} checkpointMinCount UpdatePersistentSubscription checkpointMinCount.
             * @property {number} subscriberMaxCount UpdatePersistentSubscription subscriberMaxCount.
             * @property {string} [namedConsumerStrategy] UpdatePersistentSubscription namedConsumerStrategy.
             */

            /**
             * Constructs a new UpdatePersistentSubscription.
             * @exports eventstore.proto.UpdatePersistentSubscription
             * @constructor
             * @param {eventstore.proto.UpdatePersistentSubscription$Properties=} [properties] Properties to set
             */
            function UpdatePersistentSubscription(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdatePersistentSubscription subscriptionGroupName.
             * @type {string}
             */
            UpdatePersistentSubscription.prototype.subscriptionGroupName = "";

            /**
             * UpdatePersistentSubscription eventStreamId.
             * @type {string}
             */
            UpdatePersistentSubscription.prototype.eventStreamId = "";

            /**
             * UpdatePersistentSubscription resolveLinkTos.
             * @type {boolean}
             */
            UpdatePersistentSubscription.prototype.resolveLinkTos = false;

            /**
             * UpdatePersistentSubscription startFrom.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.startFrom = 0;

            /**
             * UpdatePersistentSubscription messageTimeoutMilliseconds.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.messageTimeoutMilliseconds = 0;

            /**
             * UpdatePersistentSubscription recordStatistics.
             * @type {boolean}
             */
            UpdatePersistentSubscription.prototype.recordStatistics = false;

            /**
             * UpdatePersistentSubscription liveBufferSize.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.liveBufferSize = 0;

            /**
             * UpdatePersistentSubscription readBatchSize.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.readBatchSize = 0;

            /**
             * UpdatePersistentSubscription bufferSize.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.bufferSize = 0;

            /**
             * UpdatePersistentSubscription maxRetryCount.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.maxRetryCount = 0;

            /**
             * UpdatePersistentSubscription preferRoundRobin.
             * @type {boolean}
             */
            UpdatePersistentSubscription.prototype.preferRoundRobin = false;

            /**
             * UpdatePersistentSubscription checkpointAfterTime.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.checkpointAfterTime = 0;

            /**
             * UpdatePersistentSubscription checkpointMaxCount.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.checkpointMaxCount = 0;

            /**
             * UpdatePersistentSubscription checkpointMinCount.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.checkpointMinCount = 0;

            /**
             * UpdatePersistentSubscription subscriberMaxCount.
             * @type {number}
             */
            UpdatePersistentSubscription.prototype.subscriberMaxCount = 0;

            /**
             * UpdatePersistentSubscription namedConsumerStrategy.
             * @type {string}
             */
            UpdatePersistentSubscription.prototype.namedConsumerStrategy = "";

            /**
             * Creates a new UpdatePersistentSubscription instance using the specified properties.
             * @param {eventstore.proto.UpdatePersistentSubscription$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription instance
             */
            UpdatePersistentSubscription.create = function create(properties) {
                return new UpdatePersistentSubscription(properties);
            };

            /**
             * Encodes the specified UpdatePersistentSubscription message. Does not implicitly {@link eventstore.proto.UpdatePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.UpdatePersistentSubscription$Properties} message UpdatePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatePersistentSubscription.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.subscriptionGroupName);
                writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.eventStreamId);
                writer.uint32( /* id 3, wireType 0 =*/ 24).bool(message.resolveLinkTos);
                writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.startFrom);
                writer.uint32( /* id 5, wireType 0 =*/ 40).int32(message.messageTimeoutMilliseconds);
                writer.uint32( /* id 6, wireType 0 =*/ 48).bool(message.recordStatistics);
                writer.uint32( /* id 7, wireType 0 =*/ 56).int32(message.liveBufferSize);
                writer.uint32( /* id 8, wireType 0 =*/ 64).int32(message.readBatchSize);
                writer.uint32( /* id 9, wireType 0 =*/ 72).int32(message.bufferSize);
                writer.uint32( /* id 10, wireType 0 =*/ 80).int32(message.maxRetryCount);
                writer.uint32( /* id 11, wireType 0 =*/ 88).bool(message.preferRoundRobin);
                writer.uint32( /* id 12, wireType 0 =*/ 96).int32(message.checkpointAfterTime);
                writer.uint32( /* id 13, wireType 0 =*/ 104).int32(message.checkpointMaxCount);
                writer.uint32( /* id 14, wireType 0 =*/ 112).int32(message.checkpointMinCount);
                writer.uint32( /* id 15, wireType 0 =*/ 120).int32(message.subscriberMaxCount);
                if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                    writer.uint32( /* id 16, wireType 2 =*/ 130).string(message.namedConsumerStrategy);
                return writer;
            };

            /**
             * Encodes the specified UpdatePersistentSubscription message, length delimited. Does not implicitly {@link eventstore.proto.UpdatePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.UpdatePersistentSubscription$Properties} message UpdatePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatePersistentSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdatePersistentSubscription message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatePersistentSubscription.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.UpdatePersistentSubscription();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.subscriptionGroupName = reader.string();
                            break;
                        case 2:
                            message.eventStreamId = reader.string();
                            break;
                        case 3:
                            message.resolveLinkTos = reader.bool();
                            break;
                        case 4:
                            message.startFrom = reader.int32();
                            break;
                        case 5:
                            message.messageTimeoutMilliseconds = reader.int32();
                            break;
                        case 6:
                            message.recordStatistics = reader.bool();
                            break;
                        case 7:
                            message.liveBufferSize = reader.int32();
                            break;
                        case 8:
                            message.readBatchSize = reader.int32();
                            break;
                        case 9:
                            message.bufferSize = reader.int32();
                            break;
                        case 10:
                            message.maxRetryCount = reader.int32();
                            break;
                        case 11:
                            message.preferRoundRobin = reader.bool();
                            break;
                        case 12:
                            message.checkpointAfterTime = reader.int32();
                            break;
                        case 13:
                            message.checkpointMaxCount = reader.int32();
                            break;
                        case 14:
                            message.checkpointMinCount = reader.int32();
                            break;
                        case 15:
                            message.subscriberMaxCount = reader.int32();
                            break;
                        case 16:
                            message.namedConsumerStrategy = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("subscriptionGroupName"))
                    throw $util.ProtocolError("missing required 'subscriptionGroupName'", { instance: message });
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("resolveLinkTos"))
                    throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                if (!message.hasOwnProperty("startFrom"))
                    throw $util.ProtocolError("missing required 'startFrom'", { instance: message });
                if (!message.hasOwnProperty("messageTimeoutMilliseconds"))
                    throw $util.ProtocolError("missing required 'messageTimeoutMilliseconds'", { instance: message });
                if (!message.hasOwnProperty("recordStatistics"))
                    throw $util.ProtocolError("missing required 'recordStatistics'", { instance: message });
                if (!message.hasOwnProperty("liveBufferSize"))
                    throw $util.ProtocolError("missing required 'liveBufferSize'", { instance: message });
                if (!message.hasOwnProperty("readBatchSize"))
                    throw $util.ProtocolError("missing required 'readBatchSize'", { instance: message });
                if (!message.hasOwnProperty("bufferSize"))
                    throw $util.ProtocolError("missing required 'bufferSize'", { instance: message });
                if (!message.hasOwnProperty("maxRetryCount"))
                    throw $util.ProtocolError("missing required 'maxRetryCount'", { instance: message });
                if (!message.hasOwnProperty("preferRoundRobin"))
                    throw $util.ProtocolError("missing required 'preferRoundRobin'", { instance: message });
                if (!message.hasOwnProperty("checkpointAfterTime"))
                    throw $util.ProtocolError("missing required 'checkpointAfterTime'", { instance: message });
                if (!message.hasOwnProperty("checkpointMaxCount"))
                    throw $util.ProtocolError("missing required 'checkpointMaxCount'", { instance: message });
                if (!message.hasOwnProperty("checkpointMinCount"))
                    throw $util.ProtocolError("missing required 'checkpointMinCount'", { instance: message });
                if (!message.hasOwnProperty("subscriberMaxCount"))
                    throw $util.ProtocolError("missing required 'subscriberMaxCount'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdatePersistentSubscription message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatePersistentSubscription.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdatePersistentSubscription message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            UpdatePersistentSubscription.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.subscriptionGroupName))
                    return "subscriptionGroupName: string expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (typeof message.resolveLinkTos !== "boolean")
                    return "resolveLinkTos: boolean expected";
                if (!$util.isInteger(message.startFrom))
                    return "startFrom: integer expected";
                if (!$util.isInteger(message.messageTimeoutMilliseconds))
                    return "messageTimeoutMilliseconds: integer expected";
                if (typeof message.recordStatistics !== "boolean")
                    return "recordStatistics: boolean expected";
                if (!$util.isInteger(message.liveBufferSize))
                    return "liveBufferSize: integer expected";
                if (!$util.isInteger(message.readBatchSize))
                    return "readBatchSize: integer expected";
                if (!$util.isInteger(message.bufferSize))
                    return "bufferSize: integer expected";
                if (!$util.isInteger(message.maxRetryCount))
                    return "maxRetryCount: integer expected";
                if (typeof message.preferRoundRobin !== "boolean")
                    return "preferRoundRobin: boolean expected";
                if (!$util.isInteger(message.checkpointAfterTime))
                    return "checkpointAfterTime: integer expected";
                if (!$util.isInteger(message.checkpointMaxCount))
                    return "checkpointMaxCount: integer expected";
                if (!$util.isInteger(message.checkpointMinCount))
                    return "checkpointMinCount: integer expected";
                if (!$util.isInteger(message.subscriberMaxCount))
                    return "subscriberMaxCount: integer expected";
                if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                    if (!$util.isString(message.namedConsumerStrategy))
                        return "namedConsumerStrategy: string expected";
                return null;
            };

            /**
             * Creates an UpdatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription
             */
            UpdatePersistentSubscription.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.UpdatePersistentSubscription)
                    return object;
                var message = new $root.eventstore.proto.UpdatePersistentSubscription();
                if (object.subscriptionGroupName != null)
                    message.subscriptionGroupName = String(object.subscriptionGroupName);
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.resolveLinkTos != null)
                    message.resolveLinkTos = Boolean(object.resolveLinkTos);
                if (object.startFrom != null)
                    message.startFrom = object.startFrom | 0;
                if (object.messageTimeoutMilliseconds != null)
                    message.messageTimeoutMilliseconds = object.messageTimeoutMilliseconds | 0;
                if (object.recordStatistics != null)
                    message.recordStatistics = Boolean(object.recordStatistics);
                if (object.liveBufferSize != null)
                    message.liveBufferSize = object.liveBufferSize | 0;
                if (object.readBatchSize != null)
                    message.readBatchSize = object.readBatchSize | 0;
                if (object.bufferSize != null)
                    message.bufferSize = object.bufferSize | 0;
                if (object.maxRetryCount != null)
                    message.maxRetryCount = object.maxRetryCount | 0;
                if (object.preferRoundRobin != null)
                    message.preferRoundRobin = Boolean(object.preferRoundRobin);
                if (object.checkpointAfterTime != null)
                    message.checkpointAfterTime = object.checkpointAfterTime | 0;
                if (object.checkpointMaxCount != null)
                    message.checkpointMaxCount = object.checkpointMaxCount | 0;
                if (object.checkpointMinCount != null)
                    message.checkpointMinCount = object.checkpointMinCount | 0;
                if (object.subscriberMaxCount != null)
                    message.subscriberMaxCount = object.subscriberMaxCount | 0;
                if (object.namedConsumerStrategy != null)
                    message.namedConsumerStrategy = String(object.namedConsumerStrategy);
                return message;
            };

            /**
             * Creates an UpdatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.UpdatePersistentSubscription.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription
             */
            UpdatePersistentSubscription.from = UpdatePersistentSubscription.fromObject;

            /**
             * Creates a plain object from an UpdatePersistentSubscription message. Also converts values to other types if specified.
             * @param {eventstore.proto.UpdatePersistentSubscription} message UpdatePersistentSubscription
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdatePersistentSubscription.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.subscriptionGroupName = "";
                    object.eventStreamId = "";
                    object.resolveLinkTos = false;
                    object.startFrom = 0;
                    object.messageTimeoutMilliseconds = 0;
                    object.recordStatistics = false;
                    object.liveBufferSize = 0;
                    object.readBatchSize = 0;
                    object.bufferSize = 0;
                    object.maxRetryCount = 0;
                    object.preferRoundRobin = false;
                    object.checkpointAfterTime = 0;
                    object.checkpointMaxCount = 0;
                    object.checkpointMinCount = 0;
                    object.subscriberMaxCount = 0;
                    object.namedConsumerStrategy = "";
                }
                if (message.subscriptionGroupName != null && message.hasOwnProperty("subscriptionGroupName"))
                    object.subscriptionGroupName = message.subscriptionGroupName;
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                    object.resolveLinkTos = message.resolveLinkTos;
                if (message.startFrom != null && message.hasOwnProperty("startFrom"))
                    object.startFrom = message.startFrom;
                if (message.messageTimeoutMilliseconds != null && message.hasOwnProperty("messageTimeoutMilliseconds"))
                    object.messageTimeoutMilliseconds = message.messageTimeoutMilliseconds;
                if (message.recordStatistics != null && message.hasOwnProperty("recordStatistics"))
                    object.recordStatistics = message.recordStatistics;
                if (message.liveBufferSize != null && message.hasOwnProperty("liveBufferSize"))
                    object.liveBufferSize = message.liveBufferSize;
                if (message.readBatchSize != null && message.hasOwnProperty("readBatchSize"))
                    object.readBatchSize = message.readBatchSize;
                if (message.bufferSize != null && message.hasOwnProperty("bufferSize"))
                    object.bufferSize = message.bufferSize;
                if (message.maxRetryCount != null && message.hasOwnProperty("maxRetryCount"))
                    object.maxRetryCount = message.maxRetryCount;
                if (message.preferRoundRobin != null && message.hasOwnProperty("preferRoundRobin"))
                    object.preferRoundRobin = message.preferRoundRobin;
                if (message.checkpointAfterTime != null && message.hasOwnProperty("checkpointAfterTime"))
                    object.checkpointAfterTime = message.checkpointAfterTime;
                if (message.checkpointMaxCount != null && message.hasOwnProperty("checkpointMaxCount"))
                    object.checkpointMaxCount = message.checkpointMaxCount;
                if (message.checkpointMinCount != null && message.hasOwnProperty("checkpointMinCount"))
                    object.checkpointMinCount = message.checkpointMinCount;
                if (message.subscriberMaxCount != null && message.hasOwnProperty("subscriberMaxCount"))
                    object.subscriberMaxCount = message.subscriberMaxCount;
                if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                    object.namedConsumerStrategy = message.namedConsumerStrategy;
                return object;
            };

            /**
             * Creates a plain object from this UpdatePersistentSubscription message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdatePersistentSubscription.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this UpdatePersistentSubscription to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            UpdatePersistentSubscription.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdatePersistentSubscription;
        })();

        proto.UpdatePersistentSubscriptionCompleted = (function() {

            /**
             * Properties of an UpdatePersistentSubscriptionCompleted.
             * @typedef eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties
             * @type {Object}
             * @property {eventstore.proto.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult} result UpdatePersistentSubscriptionCompleted result.
             * @property {string} [reason] UpdatePersistentSubscriptionCompleted reason.
             */

            /**
             * Constructs a new UpdatePersistentSubscriptionCompleted.
             * @exports eventstore.proto.UpdatePersistentSubscriptionCompleted
             * @constructor
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             */
            function UpdatePersistentSubscriptionCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdatePersistentSubscriptionCompleted result.
             * @type {eventstore.proto.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult}
             */
            UpdatePersistentSubscriptionCompleted.prototype.result = 0;

            /**
             * UpdatePersistentSubscriptionCompleted reason.
             * @type {string}
             */
            UpdatePersistentSubscriptionCompleted.prototype.reason = "";

            /**
             * Creates a new UpdatePersistentSubscriptionCompleted instance using the specified properties.
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted instance
             */
            UpdatePersistentSubscriptionCompleted.create = function create(properties) {
                return new UpdatePersistentSubscriptionCompleted(properties);
            };

            /**
             * Encodes the specified UpdatePersistentSubscriptionCompleted message. Does not implicitly {@link eventstore.proto.UpdatePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties} message UpdatePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatePersistentSubscriptionCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.result);
                if (message.reason != null && message.hasOwnProperty("reason"))
                    writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.reason);
                return writer;
            };

            /**
             * Encodes the specified UpdatePersistentSubscriptionCompleted message, length delimited. Does not implicitly {@link eventstore.proto.UpdatePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties} message UpdatePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatePersistentSubscriptionCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdatePersistentSubscriptionCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatePersistentSubscriptionCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.UpdatePersistentSubscriptionCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.result = reader.uint32();
                            break;
                        case 2:
                            message.reason = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdatePersistentSubscriptionCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatePersistentSubscriptionCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdatePersistentSubscriptionCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            UpdatePersistentSubscriptionCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            break;
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };

            /**
             * Creates an UpdatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
             */
            UpdatePersistentSubscriptionCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.UpdatePersistentSubscriptionCompleted)
                    return object;
                var message = new $root.eventstore.proto.UpdatePersistentSubscriptionCompleted();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "DoesNotExist":
                    case 1:
                        message.result = 1;
                        break;
                    case "Fail":
                    case 2:
                        message.result = 2;
                        break;
                    case "AccessDenied":
                    case 3:
                        message.result = 3;
                        break;
                }
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };

            /**
             * Creates an UpdatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.UpdatePersistentSubscriptionCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
             */
            UpdatePersistentSubscriptionCompleted.from = UpdatePersistentSubscriptionCompleted.fromObject;

            /**
             * Creates a plain object from an UpdatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted} message UpdatePersistentSubscriptionCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdatePersistentSubscriptionCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.result = options.enums === String ? "Success" : 0;
                    object.reason = "";
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult[message.result] : message.result;
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };

            /**
             * Creates a plain object from this UpdatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdatePersistentSubscriptionCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this UpdatePersistentSubscriptionCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            UpdatePersistentSubscriptionCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * UpdatePersistentSubscriptionResult enum.
             * @name UpdatePersistentSubscriptionResult
             * @memberof eventstore.proto.UpdatePersistentSubscriptionCompleted
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} DoesNotExist=1 DoesNotExist value
             * @property {number} Fail=2 Fail value
             * @property {number} AccessDenied=3 AccessDenied value
             */
            UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "DoesNotExist"] = 1;
                values[valuesById[2] = "Fail"] = 2;
                values[valuesById[3] = "AccessDenied"] = 3;
                return values;
            })();

            return UpdatePersistentSubscriptionCompleted;
        })();

        proto.CreatePersistentSubscriptionCompleted = (function() {

            /**
             * Properties of a CreatePersistentSubscriptionCompleted.
             * @typedef eventstore.proto.CreatePersistentSubscriptionCompleted$Properties
             * @type {Object}
             * @property {eventstore.proto.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult} result CreatePersistentSubscriptionCompleted result.
             * @property {string} [reason] CreatePersistentSubscriptionCompleted reason.
             */

            /**
             * Constructs a new CreatePersistentSubscriptionCompleted.
             * @exports eventstore.proto.CreatePersistentSubscriptionCompleted
             * @constructor
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             */
            function CreatePersistentSubscriptionCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreatePersistentSubscriptionCompleted result.
             * @type {eventstore.proto.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult}
             */
            CreatePersistentSubscriptionCompleted.prototype.result = 0;

            /**
             * CreatePersistentSubscriptionCompleted reason.
             * @type {string}
             */
            CreatePersistentSubscriptionCompleted.prototype.reason = "";

            /**
             * Creates a new CreatePersistentSubscriptionCompleted instance using the specified properties.
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted instance
             */
            CreatePersistentSubscriptionCompleted.create = function create(properties) {
                return new CreatePersistentSubscriptionCompleted(properties);
            };

            /**
             * Encodes the specified CreatePersistentSubscriptionCompleted message. Does not implicitly {@link eventstore.proto.CreatePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted$Properties} message CreatePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePersistentSubscriptionCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.result);
                if (message.reason != null && message.hasOwnProperty("reason"))
                    writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.reason);
                return writer;
            };

            /**
             * Encodes the specified CreatePersistentSubscriptionCompleted message, length delimited. Does not implicitly {@link eventstore.proto.CreatePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted$Properties} message CreatePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePersistentSubscriptionCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreatePersistentSubscriptionCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePersistentSubscriptionCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.CreatePersistentSubscriptionCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.result = reader.uint32();
                            break;
                        case 2:
                            message.reason = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a CreatePersistentSubscriptionCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePersistentSubscriptionCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreatePersistentSubscriptionCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            CreatePersistentSubscriptionCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            break;
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };

            /**
             * Creates a CreatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
             */
            CreatePersistentSubscriptionCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.CreatePersistentSubscriptionCompleted)
                    return object;
                var message = new $root.eventstore.proto.CreatePersistentSubscriptionCompleted();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "AlreadyExists":
                    case 1:
                        message.result = 1;
                        break;
                    case "Fail":
                    case 2:
                        message.result = 2;
                        break;
                    case "AccessDenied":
                    case 3:
                        message.result = 3;
                        break;
                }
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };

            /**
             * Creates a CreatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.CreatePersistentSubscriptionCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
             */
            CreatePersistentSubscriptionCompleted.from = CreatePersistentSubscriptionCompleted.fromObject;

            /**
             * Creates a plain object from a CreatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted} message CreatePersistentSubscriptionCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreatePersistentSubscriptionCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.result = options.enums === String ? "Success" : 0;
                    object.reason = "";
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult[message.result] : message.result;
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };

            /**
             * Creates a plain object from this CreatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreatePersistentSubscriptionCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this CreatePersistentSubscriptionCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            CreatePersistentSubscriptionCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CreatePersistentSubscriptionResult enum.
             * @name CreatePersistentSubscriptionResult
             * @memberof eventstore.proto.CreatePersistentSubscriptionCompleted
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} AlreadyExists=1 AlreadyExists value
             * @property {number} Fail=2 Fail value
             * @property {number} AccessDenied=3 AccessDenied value
             */
            CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "AlreadyExists"] = 1;
                values[valuesById[2] = "Fail"] = 2;
                values[valuesById[3] = "AccessDenied"] = 3;
                return values;
            })();

            return CreatePersistentSubscriptionCompleted;
        })();

        proto.DeletePersistentSubscriptionCompleted = (function() {

            /**
             * Properties of a DeletePersistentSubscriptionCompleted.
             * @typedef eventstore.proto.DeletePersistentSubscriptionCompleted$Properties
             * @type {Object}
             * @property {eventstore.proto.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult} result DeletePersistentSubscriptionCompleted result.
             * @property {string} [reason] DeletePersistentSubscriptionCompleted reason.
             */

            /**
             * Constructs a new DeletePersistentSubscriptionCompleted.
             * @exports eventstore.proto.DeletePersistentSubscriptionCompleted
             * @constructor
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             */
            function DeletePersistentSubscriptionCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeletePersistentSubscriptionCompleted result.
             * @type {eventstore.proto.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult}
             */
            DeletePersistentSubscriptionCompleted.prototype.result = 0;

            /**
             * DeletePersistentSubscriptionCompleted reason.
             * @type {string}
             */
            DeletePersistentSubscriptionCompleted.prototype.reason = "";

            /**
             * Creates a new DeletePersistentSubscriptionCompleted instance using the specified properties.
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted instance
             */
            DeletePersistentSubscriptionCompleted.create = function create(properties) {
                return new DeletePersistentSubscriptionCompleted(properties);
            };

            /**
             * Encodes the specified DeletePersistentSubscriptionCompleted message. Does not implicitly {@link eventstore.proto.DeletePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted$Properties} message DeletePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeletePersistentSubscriptionCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.result);
                if (message.reason != null && message.hasOwnProperty("reason"))
                    writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.reason);
                return writer;
            };

            /**
             * Encodes the specified DeletePersistentSubscriptionCompleted message, length delimited. Does not implicitly {@link eventstore.proto.DeletePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted$Properties} message DeletePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeletePersistentSubscriptionCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeletePersistentSubscriptionCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeletePersistentSubscriptionCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.DeletePersistentSubscriptionCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.result = reader.uint32();
                            break;
                        case 2:
                            message.reason = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a DeletePersistentSubscriptionCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeletePersistentSubscriptionCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeletePersistentSubscriptionCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            DeletePersistentSubscriptionCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            break;
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };

            /**
             * Creates a DeletePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
             */
            DeletePersistentSubscriptionCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.DeletePersistentSubscriptionCompleted)
                    return object;
                var message = new $root.eventstore.proto.DeletePersistentSubscriptionCompleted();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "DoesNotExist":
                    case 1:
                        message.result = 1;
                        break;
                    case "Fail":
                    case 2:
                        message.result = 2;
                        break;
                    case "AccessDenied":
                    case 3:
                        message.result = 3;
                        break;
                }
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };

            /**
             * Creates a DeletePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.DeletePersistentSubscriptionCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
             */
            DeletePersistentSubscriptionCompleted.from = DeletePersistentSubscriptionCompleted.fromObject;

            /**
             * Creates a plain object from a DeletePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted} message DeletePersistentSubscriptionCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeletePersistentSubscriptionCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.result = options.enums === String ? "Success" : 0;
                    object.reason = "";
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult[message.result] : message.result;
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };

            /**
             * Creates a plain object from this DeletePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeletePersistentSubscriptionCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this DeletePersistentSubscriptionCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            DeletePersistentSubscriptionCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * DeletePersistentSubscriptionResult enum.
             * @name DeletePersistentSubscriptionResult
             * @memberof eventstore.proto.DeletePersistentSubscriptionCompleted
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} DoesNotExist=1 DoesNotExist value
             * @property {number} Fail=2 Fail value
             * @property {number} AccessDenied=3 AccessDenied value
             */
            DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "DoesNotExist"] = 1;
                values[valuesById[2] = "Fail"] = 2;
                values[valuesById[3] = "AccessDenied"] = 3;
                return values;
            })();

            return DeletePersistentSubscriptionCompleted;
        })();

        proto.ConnectToPersistentSubscription = (function() {

            /**
             * Properties of a ConnectToPersistentSubscription.
             * @typedef eventstore.proto.ConnectToPersistentSubscription$Properties
             * @type {Object}
             * @property {string} subscriptionId ConnectToPersistentSubscription subscriptionId.
             * @property {string} eventStreamId ConnectToPersistentSubscription eventStreamId.
             * @property {number} allowedInFlightMessages ConnectToPersistentSubscription allowedInFlightMessages.
             */

            /**
             * Constructs a new ConnectToPersistentSubscription.
             * @exports eventstore.proto.ConnectToPersistentSubscription
             * @constructor
             * @param {eventstore.proto.ConnectToPersistentSubscription$Properties=} [properties] Properties to set
             */
            function ConnectToPersistentSubscription(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConnectToPersistentSubscription subscriptionId.
             * @type {string}
             */
            ConnectToPersistentSubscription.prototype.subscriptionId = "";

            /**
             * ConnectToPersistentSubscription eventStreamId.
             * @type {string}
             */
            ConnectToPersistentSubscription.prototype.eventStreamId = "";

            /**
             * ConnectToPersistentSubscription allowedInFlightMessages.
             * @type {number}
             */
            ConnectToPersistentSubscription.prototype.allowedInFlightMessages = 0;

            /**
             * Creates a new ConnectToPersistentSubscription instance using the specified properties.
             * @param {eventstore.proto.ConnectToPersistentSubscription$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription instance
             */
            ConnectToPersistentSubscription.create = function create(properties) {
                return new ConnectToPersistentSubscription(properties);
            };

            /**
             * Encodes the specified ConnectToPersistentSubscription message. Does not implicitly {@link eventstore.proto.ConnectToPersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.ConnectToPersistentSubscription$Properties} message ConnectToPersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectToPersistentSubscription.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.subscriptionId);
                writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.eventStreamId);
                writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.allowedInFlightMessages);
                return writer;
            };

            /**
             * Encodes the specified ConnectToPersistentSubscription message, length delimited. Does not implicitly {@link eventstore.proto.ConnectToPersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.ConnectToPersistentSubscription$Properties} message ConnectToPersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectToPersistentSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConnectToPersistentSubscription message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectToPersistentSubscription.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ConnectToPersistentSubscription();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.subscriptionId = reader.string();
                            break;
                        case 2:
                            message.eventStreamId = reader.string();
                            break;
                        case 3:
                            message.allowedInFlightMessages = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("subscriptionId"))
                    throw $util.ProtocolError("missing required 'subscriptionId'", { instance: message });
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("allowedInFlightMessages"))
                    throw $util.ProtocolError("missing required 'allowedInFlightMessages'", { instance: message });
                return message;
            };

            /**
             * Decodes a ConnectToPersistentSubscription message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectToPersistentSubscription.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConnectToPersistentSubscription message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ConnectToPersistentSubscription.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.subscriptionId))
                    return "subscriptionId: string expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (!$util.isInteger(message.allowedInFlightMessages))
                    return "allowedInFlightMessages: integer expected";
                return null;
            };

            /**
             * Creates a ConnectToPersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription
             */
            ConnectToPersistentSubscription.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ConnectToPersistentSubscription)
                    return object;
                var message = new $root.eventstore.proto.ConnectToPersistentSubscription();
                if (object.subscriptionId != null)
                    message.subscriptionId = String(object.subscriptionId);
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.allowedInFlightMessages != null)
                    message.allowedInFlightMessages = object.allowedInFlightMessages | 0;
                return message;
            };

            /**
             * Creates a ConnectToPersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ConnectToPersistentSubscription.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription
             */
            ConnectToPersistentSubscription.from = ConnectToPersistentSubscription.fromObject;

            /**
             * Creates a plain object from a ConnectToPersistentSubscription message. Also converts values to other types if specified.
             * @param {eventstore.proto.ConnectToPersistentSubscription} message ConnectToPersistentSubscription
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectToPersistentSubscription.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.subscriptionId = "";
                    object.eventStreamId = "";
                    object.allowedInFlightMessages = 0;
                }
                if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                    object.subscriptionId = message.subscriptionId;
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.allowedInFlightMessages != null && message.hasOwnProperty("allowedInFlightMessages"))
                    object.allowedInFlightMessages = message.allowedInFlightMessages;
                return object;
            };

            /**
             * Creates a plain object from this ConnectToPersistentSubscription message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectToPersistentSubscription.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ConnectToPersistentSubscription to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ConnectToPersistentSubscription.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ConnectToPersistentSubscription;
        })();

        proto.PersistentSubscriptionAckEvents = (function() {

            /**
             * Properties of a PersistentSubscriptionAckEvents.
             * @typedef eventstore.proto.PersistentSubscriptionAckEvents$Properties
             * @type {Object}
             * @property {string} subscriptionId PersistentSubscriptionAckEvents subscriptionId.
             * @property {Array.<Uint8Array>} [processedEventIds] PersistentSubscriptionAckEvents processedEventIds.
             */

            /**
             * Constructs a new PersistentSubscriptionAckEvents.
             * @exports eventstore.proto.PersistentSubscriptionAckEvents
             * @constructor
             * @param {eventstore.proto.PersistentSubscriptionAckEvents$Properties=} [properties] Properties to set
             */
            function PersistentSubscriptionAckEvents(properties) {
                this.processedEventIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PersistentSubscriptionAckEvents subscriptionId.
             * @type {string}
             */
            PersistentSubscriptionAckEvents.prototype.subscriptionId = "";

            /**
             * PersistentSubscriptionAckEvents processedEventIds.
             * @type {Array.<Uint8Array>}
             */
            PersistentSubscriptionAckEvents.prototype.processedEventIds = $util.emptyArray;

            /**
             * Creates a new PersistentSubscriptionAckEvents instance using the specified properties.
             * @param {eventstore.proto.PersistentSubscriptionAckEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents instance
             */
            PersistentSubscriptionAckEvents.create = function create(properties) {
                return new PersistentSubscriptionAckEvents(properties);
            };

            /**
             * Encodes the specified PersistentSubscriptionAckEvents message. Does not implicitly {@link eventstore.proto.PersistentSubscriptionAckEvents.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionAckEvents$Properties} message PersistentSubscriptionAckEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersistentSubscriptionAckEvents.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.subscriptionId);
                if (message.processedEventIds != null && message.processedEventIds.length)
                    for (var i = 0; i < message.processedEventIds.length; ++i)
                        writer.uint32( /* id 2, wireType 2 =*/ 18).bytes(message.processedEventIds[i]);
                return writer;
            };

            /**
             * Encodes the specified PersistentSubscriptionAckEvents message, length delimited. Does not implicitly {@link eventstore.proto.PersistentSubscriptionAckEvents.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionAckEvents$Properties} message PersistentSubscriptionAckEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersistentSubscriptionAckEvents.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PersistentSubscriptionAckEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersistentSubscriptionAckEvents.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.PersistentSubscriptionAckEvents();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.subscriptionId = reader.string();
                            break;
                        case 2:
                            if (!(message.processedEventIds && message.processedEventIds.length))
                                message.processedEventIds = [];
                            message.processedEventIds.push(reader.bytes());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("subscriptionId"))
                    throw $util.ProtocolError("missing required 'subscriptionId'", { instance: message });
                return message;
            };

            /**
             * Decodes a PersistentSubscriptionAckEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersistentSubscriptionAckEvents.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PersistentSubscriptionAckEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            PersistentSubscriptionAckEvents.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.subscriptionId))
                    return "subscriptionId: string expected";
                if (message.processedEventIds != null && message.hasOwnProperty("processedEventIds")) {
                    if (!Array.isArray(message.processedEventIds))
                        return "processedEventIds: array expected";
                    for (var i = 0; i < message.processedEventIds.length; ++i)
                        if (!(message.processedEventIds[i] && typeof message.processedEventIds[i].length === "number" || $util.isString(message.processedEventIds[i])))
                            return "processedEventIds: buffer[] expected";
                }
                return null;
            };

            /**
             * Creates a PersistentSubscriptionAckEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
             */
            PersistentSubscriptionAckEvents.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.PersistentSubscriptionAckEvents)
                    return object;
                var message = new $root.eventstore.proto.PersistentSubscriptionAckEvents();
                if (object.subscriptionId != null)
                    message.subscriptionId = String(object.subscriptionId);
                if (object.processedEventIds) {
                    if (!Array.isArray(object.processedEventIds))
                        throw TypeError(".eventstore.proto.PersistentSubscriptionAckEvents.processedEventIds: array expected");
                    message.processedEventIds = [];
                    for (var i = 0; i < object.processedEventIds.length; ++i)
                        if (typeof object.processedEventIds[i] === "string")
                            $util.base64.decode(object.processedEventIds[i], message.processedEventIds[i] = $util.newBuffer($util.base64.length(object.processedEventIds[i])), 0);
                        else if (object.processedEventIds[i].length)
                        message.processedEventIds[i] = object.processedEventIds[i];
                }
                return message;
            };

            /**
             * Creates a PersistentSubscriptionAckEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.PersistentSubscriptionAckEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
             */
            PersistentSubscriptionAckEvents.from = PersistentSubscriptionAckEvents.fromObject;

            /**
             * Creates a plain object from a PersistentSubscriptionAckEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.PersistentSubscriptionAckEvents} message PersistentSubscriptionAckEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersistentSubscriptionAckEvents.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.processedEventIds = [];
                if (options.defaults)
                    object.subscriptionId = "";
                if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                    object.subscriptionId = message.subscriptionId;
                if (message.processedEventIds && message.processedEventIds.length) {
                    object.processedEventIds = [];
                    for (var j = 0; j < message.processedEventIds.length; ++j)
                        object.processedEventIds[j] = options.bytes === String ? $util.base64.encode(message.processedEventIds[j], 0, message.processedEventIds[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.processedEventIds[j]) : message.processedEventIds[j];
                }
                return object;
            };

            /**
             * Creates a plain object from this PersistentSubscriptionAckEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersistentSubscriptionAckEvents.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this PersistentSubscriptionAckEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            PersistentSubscriptionAckEvents.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PersistentSubscriptionAckEvents;
        })();

        proto.PersistentSubscriptionNakEvents = (function() {

            /**
             * Properties of a PersistentSubscriptionNakEvents.
             * @typedef eventstore.proto.PersistentSubscriptionNakEvents$Properties
             * @type {Object}
             * @property {string} subscriptionId PersistentSubscriptionNakEvents subscriptionId.
             * @property {Array.<Uint8Array>} [processedEventIds] PersistentSubscriptionNakEvents processedEventIds.
             * @property {string} [message] PersistentSubscriptionNakEvents message.
             * @property {eventstore.proto.PersistentSubscriptionNakEvents.NakAction} action PersistentSubscriptionNakEvents action.
             */

            /**
             * Constructs a new PersistentSubscriptionNakEvents.
             * @exports eventstore.proto.PersistentSubscriptionNakEvents
             * @constructor
             * @param {eventstore.proto.PersistentSubscriptionNakEvents$Properties=} [properties] Properties to set
             */
            function PersistentSubscriptionNakEvents(properties) {
                this.processedEventIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PersistentSubscriptionNakEvents subscriptionId.
             * @type {string}
             */
            PersistentSubscriptionNakEvents.prototype.subscriptionId = "";

            /**
             * PersistentSubscriptionNakEvents processedEventIds.
             * @type {Array.<Uint8Array>}
             */
            PersistentSubscriptionNakEvents.prototype.processedEventIds = $util.emptyArray;

            /**
             * PersistentSubscriptionNakEvents message.
             * @type {string}
             */
            PersistentSubscriptionNakEvents.prototype.message = "";

            /**
             * PersistentSubscriptionNakEvents action.
             * @type {eventstore.proto.PersistentSubscriptionNakEvents.NakAction}
             */
            PersistentSubscriptionNakEvents.prototype.action = 0;

            /**
             * Creates a new PersistentSubscriptionNakEvents instance using the specified properties.
             * @param {eventstore.proto.PersistentSubscriptionNakEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents instance
             */
            PersistentSubscriptionNakEvents.create = function create(properties) {
                return new PersistentSubscriptionNakEvents(properties);
            };

            /**
             * Encodes the specified PersistentSubscriptionNakEvents message. Does not implicitly {@link eventstore.proto.PersistentSubscriptionNakEvents.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionNakEvents$Properties} message PersistentSubscriptionNakEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersistentSubscriptionNakEvents.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.subscriptionId);
                if (message.processedEventIds != null && message.processedEventIds.length)
                    for (var i = 0; i < message.processedEventIds.length; ++i)
                        writer.uint32( /* id 2, wireType 2 =*/ 18).bytes(message.processedEventIds[i]);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.message);
                writer.uint32( /* id 4, wireType 0 =*/ 32).uint32(message.action);
                return writer;
            };

            /**
             * Encodes the specified PersistentSubscriptionNakEvents message, length delimited. Does not implicitly {@link eventstore.proto.PersistentSubscriptionNakEvents.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionNakEvents$Properties} message PersistentSubscriptionNakEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersistentSubscriptionNakEvents.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PersistentSubscriptionNakEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersistentSubscriptionNakEvents.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.PersistentSubscriptionNakEvents();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.subscriptionId = reader.string();
                            break;
                        case 2:
                            if (!(message.processedEventIds && message.processedEventIds.length))
                                message.processedEventIds = [];
                            message.processedEventIds.push(reader.bytes());
                            break;
                        case 3:
                            message.message = reader.string();
                            break;
                        case 4:
                            message.action = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("subscriptionId"))
                    throw $util.ProtocolError("missing required 'subscriptionId'", { instance: message });
                if (!message.hasOwnProperty("action"))
                    throw $util.ProtocolError("missing required 'action'", { instance: message });
                return message;
            };

            /**
             * Decodes a PersistentSubscriptionNakEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersistentSubscriptionNakEvents.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PersistentSubscriptionNakEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            PersistentSubscriptionNakEvents.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.subscriptionId))
                    return "subscriptionId: string expected";
                if (message.processedEventIds != null && message.hasOwnProperty("processedEventIds")) {
                    if (!Array.isArray(message.processedEventIds))
                        return "processedEventIds: array expected";
                    for (var i = 0; i < message.processedEventIds.length; ++i)
                        if (!(message.processedEventIds[i] && typeof message.processedEventIds[i].length === "number" || $util.isString(message.processedEventIds[i])))
                            return "processedEventIds: buffer[] expected";
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                switch (message.action) {
                    default: return "action: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            break;
                }
                return null;
            };

            /**
             * Creates a PersistentSubscriptionNakEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
             */
            PersistentSubscriptionNakEvents.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.PersistentSubscriptionNakEvents)
                    return object;
                var message = new $root.eventstore.proto.PersistentSubscriptionNakEvents();
                if (object.subscriptionId != null)
                    message.subscriptionId = String(object.subscriptionId);
                if (object.processedEventIds) {
                    if (!Array.isArray(object.processedEventIds))
                        throw TypeError(".eventstore.proto.PersistentSubscriptionNakEvents.processedEventIds: array expected");
                    message.processedEventIds = [];
                    for (var i = 0; i < object.processedEventIds.length; ++i)
                        if (typeof object.processedEventIds[i] === "string")
                            $util.base64.decode(object.processedEventIds[i], message.processedEventIds[i] = $util.newBuffer($util.base64.length(object.processedEventIds[i])), 0);
                        else if (object.processedEventIds[i].length)
                        message.processedEventIds[i] = object.processedEventIds[i];
                }
                if (object.message != null)
                    message.message = String(object.message);
                switch (object.action) {
                    case "Unknown":
                    case 0:
                        message.action = 0;
                        break;
                    case "Park":
                    case 1:
                        message.action = 1;
                        break;
                    case "Retry":
                    case 2:
                        message.action = 2;
                        break;
                    case "Skip":
                    case 3:
                        message.action = 3;
                        break;
                    case "Stop":
                    case 4:
                        message.action = 4;
                        break;
                }
                return message;
            };

            /**
             * Creates a PersistentSubscriptionNakEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.PersistentSubscriptionNakEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
             */
            PersistentSubscriptionNakEvents.from = PersistentSubscriptionNakEvents.fromObject;

            /**
             * Creates a plain object from a PersistentSubscriptionNakEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.PersistentSubscriptionNakEvents} message PersistentSubscriptionNakEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersistentSubscriptionNakEvents.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.processedEventIds = [];
                if (options.defaults) {
                    object.subscriptionId = "";
                    object.message = "";
                    object.action = options.enums === String ? "Unknown" : 0;
                }
                if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                    object.subscriptionId = message.subscriptionId;
                if (message.processedEventIds && message.processedEventIds.length) {
                    object.processedEventIds = [];
                    for (var j = 0; j < message.processedEventIds.length; ++j)
                        object.processedEventIds[j] = options.bytes === String ? $util.base64.encode(message.processedEventIds[j], 0, message.processedEventIds[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.processedEventIds[j]) : message.processedEventIds[j];
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.action != null && message.hasOwnProperty("action"))
                    object.action = options.enums === String ? $root.eventstore.proto.PersistentSubscriptionNakEvents.NakAction[message.action] : message.action;
                return object;
            };

            /**
             * Creates a plain object from this PersistentSubscriptionNakEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersistentSubscriptionNakEvents.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this PersistentSubscriptionNakEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            PersistentSubscriptionNakEvents.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * NakAction enum.
             * @name NakAction
             * @memberof eventstore.proto.PersistentSubscriptionNakEvents
             * @enum {number}
             * @property {number} Unknown=0 Unknown value
             * @property {number} Park=1 Park value
             * @property {number} Retry=2 Retry value
             * @property {number} Skip=3 Skip value
             * @property {number} Stop=4 Stop value
             */
            PersistentSubscriptionNakEvents.NakAction = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "Unknown"] = 0;
                values[valuesById[1] = "Park"] = 1;
                values[valuesById[2] = "Retry"] = 2;
                values[valuesById[3] = "Skip"] = 3;
                values[valuesById[4] = "Stop"] = 4;
                return values;
            })();

            return PersistentSubscriptionNakEvents;
        })();

        proto.PersistentSubscriptionConfirmation = (function() {

            /**
             * Properties of a PersistentSubscriptionConfirmation.
             * @typedef eventstore.proto.PersistentSubscriptionConfirmation$Properties
             * @type {Object}
             * @property {number|Long} lastCommitPosition PersistentSubscriptionConfirmation lastCommitPosition.
             * @property {string} subscriptionId PersistentSubscriptionConfirmation subscriptionId.
             * @property {number} [lastEventNumber] PersistentSubscriptionConfirmation lastEventNumber.
             */

            /**
             * Constructs a new PersistentSubscriptionConfirmation.
             * @exports eventstore.proto.PersistentSubscriptionConfirmation
             * @constructor
             * @param {eventstore.proto.PersistentSubscriptionConfirmation$Properties=} [properties] Properties to set
             */
            function PersistentSubscriptionConfirmation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PersistentSubscriptionConfirmation lastCommitPosition.
             * @type {number|Long}
             */
            PersistentSubscriptionConfirmation.prototype.lastCommitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * PersistentSubscriptionConfirmation subscriptionId.
             * @type {string}
             */
            PersistentSubscriptionConfirmation.prototype.subscriptionId = "";

            /**
             * PersistentSubscriptionConfirmation lastEventNumber.
             * @type {number}
             */
            PersistentSubscriptionConfirmation.prototype.lastEventNumber = 0;

            /**
             * Creates a new PersistentSubscriptionConfirmation instance using the specified properties.
             * @param {eventstore.proto.PersistentSubscriptionConfirmation$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation instance
             */
            PersistentSubscriptionConfirmation.create = function create(properties) {
                return new PersistentSubscriptionConfirmation(properties);
            };

            /**
             * Encodes the specified PersistentSubscriptionConfirmation message. Does not implicitly {@link eventstore.proto.PersistentSubscriptionConfirmation.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionConfirmation$Properties} message PersistentSubscriptionConfirmation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersistentSubscriptionConfirmation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).int64(message.lastCommitPosition);
                writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.subscriptionId);
                if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                    writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.lastEventNumber);
                return writer;
            };

            /**
             * Encodes the specified PersistentSubscriptionConfirmation message, length delimited. Does not implicitly {@link eventstore.proto.PersistentSubscriptionConfirmation.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionConfirmation$Properties} message PersistentSubscriptionConfirmation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersistentSubscriptionConfirmation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PersistentSubscriptionConfirmation message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersistentSubscriptionConfirmation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.PersistentSubscriptionConfirmation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.lastCommitPosition = reader.int64();
                            break;
                        case 2:
                            message.subscriptionId = reader.string();
                            break;
                        case 3:
                            message.lastEventNumber = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("lastCommitPosition"))
                    throw $util.ProtocolError("missing required 'lastCommitPosition'", { instance: message });
                if (!message.hasOwnProperty("subscriptionId"))
                    throw $util.ProtocolError("missing required 'subscriptionId'", { instance: message });
                return message;
            };

            /**
             * Decodes a PersistentSubscriptionConfirmation message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersistentSubscriptionConfirmation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PersistentSubscriptionConfirmation message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            PersistentSubscriptionConfirmation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.lastCommitPosition) && !(message.lastCommitPosition && $util.isInteger(message.lastCommitPosition.low) && $util.isInteger(message.lastCommitPosition.high)))
                    return "lastCommitPosition: integer|Long expected";
                if (!$util.isString(message.subscriptionId))
                    return "subscriptionId: string expected";
                if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                    if (!$util.isInteger(message.lastEventNumber))
                        return "lastEventNumber: integer expected";
                return null;
            };

            /**
             * Creates a PersistentSubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
             */
            PersistentSubscriptionConfirmation.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.PersistentSubscriptionConfirmation)
                    return object;
                var message = new $root.eventstore.proto.PersistentSubscriptionConfirmation();
                if (object.lastCommitPosition != null)
                    if ($util.Long)
                        (message.lastCommitPosition = $util.Long.fromValue(object.lastCommitPosition)).unsigned = false;
                    else if (typeof object.lastCommitPosition === "string")
                    message.lastCommitPosition = parseInt(object.lastCommitPosition, 10);
                else if (typeof object.lastCommitPosition === "number")
                    message.lastCommitPosition = object.lastCommitPosition;
                else if (typeof object.lastCommitPosition === "object")
                    message.lastCommitPosition = new $util.LongBits(object.lastCommitPosition.low >>> 0, object.lastCommitPosition.high >>> 0).toNumber();
                if (object.subscriptionId != null)
                    message.subscriptionId = String(object.subscriptionId);
                if (object.lastEventNumber != null)
                    message.lastEventNumber = object.lastEventNumber | 0;
                return message;
            };

            /**
             * Creates a PersistentSubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.PersistentSubscriptionConfirmation.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
             */
            PersistentSubscriptionConfirmation.from = PersistentSubscriptionConfirmation.fromObject;

            /**
             * Creates a plain object from a PersistentSubscriptionConfirmation message. Also converts values to other types if specified.
             * @param {eventstore.proto.PersistentSubscriptionConfirmation} message PersistentSubscriptionConfirmation
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersistentSubscriptionConfirmation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.lastCommitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastCommitPosition = options.longs === String ? "0" : 0;
                    object.subscriptionId = "";
                    object.lastEventNumber = 0;
                }
                if (message.lastCommitPosition != null && message.hasOwnProperty("lastCommitPosition"))
                    if (typeof message.lastCommitPosition === "number")
                        object.lastCommitPosition = options.longs === String ? String(message.lastCommitPosition) : message.lastCommitPosition;
                    else
                        object.lastCommitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.lastCommitPosition) : options.longs === Number ? new $util.LongBits(message.lastCommitPosition.low >>> 0, message.lastCommitPosition.high >>> 0).toNumber() : message.lastCommitPosition;
                if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                    object.subscriptionId = message.subscriptionId;
                if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                    object.lastEventNumber = message.lastEventNumber;
                return object;
            };

            /**
             * Creates a plain object from this PersistentSubscriptionConfirmation message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersistentSubscriptionConfirmation.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this PersistentSubscriptionConfirmation to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            PersistentSubscriptionConfirmation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PersistentSubscriptionConfirmation;
        })();

        proto.PersistentSubscriptionStreamEventAppeared = (function() {

            /**
             * Properties of a PersistentSubscriptionStreamEventAppeared.
             * @typedef eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties
             * @type {Object}
             * @property {eventstore.proto.ResolvedIndexedEvent$Properties} event PersistentSubscriptionStreamEventAppeared event.
             */

            /**
             * Constructs a new PersistentSubscriptionStreamEventAppeared.
             * @exports eventstore.proto.PersistentSubscriptionStreamEventAppeared
             * @constructor
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties=} [properties] Properties to set
             */
            function PersistentSubscriptionStreamEventAppeared(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PersistentSubscriptionStreamEventAppeared event.
             * @type {eventstore.proto.ResolvedIndexedEvent$Properties}
             */
            PersistentSubscriptionStreamEventAppeared.prototype.event = null;

            /**
             * Creates a new PersistentSubscriptionStreamEventAppeared instance using the specified properties.
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared instance
             */
            PersistentSubscriptionStreamEventAppeared.create = function create(properties) {
                return new PersistentSubscriptionStreamEventAppeared(properties);
            };

            /**
             * Encodes the specified PersistentSubscriptionStreamEventAppeared message. Does not implicitly {@link eventstore.proto.PersistentSubscriptionStreamEventAppeared.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties} message PersistentSubscriptionStreamEventAppeared message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersistentSubscriptionStreamEventAppeared.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.eventstore.proto.ResolvedIndexedEvent.encode(message.event, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified PersistentSubscriptionStreamEventAppeared message, length delimited. Does not implicitly {@link eventstore.proto.PersistentSubscriptionStreamEventAppeared.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties} message PersistentSubscriptionStreamEventAppeared message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersistentSubscriptionStreamEventAppeared.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PersistentSubscriptionStreamEventAppeared message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersistentSubscriptionStreamEventAppeared.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.PersistentSubscriptionStreamEventAppeared();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.event = $root.eventstore.proto.ResolvedIndexedEvent.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("event"))
                    throw $util.ProtocolError("missing required 'event'", { instance: message });
                return message;
            };

            /**
             * Decodes a PersistentSubscriptionStreamEventAppeared message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersistentSubscriptionStreamEventAppeared.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PersistentSubscriptionStreamEventAppeared message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            PersistentSubscriptionStreamEventAppeared.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var error = $root.eventstore.proto.ResolvedIndexedEvent.verify(message.event);
                if (error)
                    return "event." + error;
                return null;
            };

            /**
             * Creates a PersistentSubscriptionStreamEventAppeared message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
             */
            PersistentSubscriptionStreamEventAppeared.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.PersistentSubscriptionStreamEventAppeared)
                    return object;
                var message = new $root.eventstore.proto.PersistentSubscriptionStreamEventAppeared();
                if (object.event != null) {
                    if (typeof object.event !== "object")
                        throw TypeError(".eventstore.proto.PersistentSubscriptionStreamEventAppeared.event: object expected");
                    message.event = $root.eventstore.proto.ResolvedIndexedEvent.fromObject(object.event);
                }
                return message;
            };

            /**
             * Creates a PersistentSubscriptionStreamEventAppeared message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.PersistentSubscriptionStreamEventAppeared.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
             */
            PersistentSubscriptionStreamEventAppeared.from = PersistentSubscriptionStreamEventAppeared.fromObject;

            /**
             * Creates a plain object from a PersistentSubscriptionStreamEventAppeared message. Also converts values to other types if specified.
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared} message PersistentSubscriptionStreamEventAppeared
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersistentSubscriptionStreamEventAppeared.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.event = null;
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = $root.eventstore.proto.ResolvedIndexedEvent.toObject(message.event, options);
                return object;
            };

            /**
             * Creates a plain object from this PersistentSubscriptionStreamEventAppeared message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersistentSubscriptionStreamEventAppeared.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this PersistentSubscriptionStreamEventAppeared to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            PersistentSubscriptionStreamEventAppeared.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PersistentSubscriptionStreamEventAppeared;
        })();

        proto.SubscribeToStream = (function() {

            /**
             * Properties of a SubscribeToStream.
             * @typedef eventstore.proto.SubscribeToStream$Properties
             * @type {Object}
             * @property {string} eventStreamId SubscribeToStream eventStreamId.
             * @property {boolean} resolveLinkTos SubscribeToStream resolveLinkTos.
             */

            /**
             * Constructs a new SubscribeToStream.
             * @exports eventstore.proto.SubscribeToStream
             * @constructor
             * @param {eventstore.proto.SubscribeToStream$Properties=} [properties] Properties to set
             */
            function SubscribeToStream(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SubscribeToStream eventStreamId.
             * @type {string}
             */
            SubscribeToStream.prototype.eventStreamId = "";

            /**
             * SubscribeToStream resolveLinkTos.
             * @type {boolean}
             */
            SubscribeToStream.prototype.resolveLinkTos = false;

            /**
             * Creates a new SubscribeToStream instance using the specified properties.
             * @param {eventstore.proto.SubscribeToStream$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream instance
             */
            SubscribeToStream.create = function create(properties) {
                return new SubscribeToStream(properties);
            };

            /**
             * Encodes the specified SubscribeToStream message. Does not implicitly {@link eventstore.proto.SubscribeToStream.verify|verify} messages.
             * @param {eventstore.proto.SubscribeToStream$Properties} message SubscribeToStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeToStream.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.eventStreamId);
                writer.uint32( /* id 2, wireType 0 =*/ 16).bool(message.resolveLinkTos);
                return writer;
            };

            /**
             * Encodes the specified SubscribeToStream message, length delimited. Does not implicitly {@link eventstore.proto.SubscribeToStream.verify|verify} messages.
             * @param {eventstore.proto.SubscribeToStream$Properties} message SubscribeToStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeToStream.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SubscribeToStream message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeToStream.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.SubscribeToStream();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.eventStreamId = reader.string();
                            break;
                        case 2:
                            message.resolveLinkTos = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("eventStreamId"))
                    throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                if (!message.hasOwnProperty("resolveLinkTos"))
                    throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                return message;
            };

            /**
             * Decodes a SubscribeToStream message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeToStream.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SubscribeToStream message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            SubscribeToStream.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.eventStreamId))
                    return "eventStreamId: string expected";
                if (typeof message.resolveLinkTos !== "boolean")
                    return "resolveLinkTos: boolean expected";
                return null;
            };

            /**
             * Creates a SubscribeToStream message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream
             */
            SubscribeToStream.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.SubscribeToStream)
                    return object;
                var message = new $root.eventstore.proto.SubscribeToStream();
                if (object.eventStreamId != null)
                    message.eventStreamId = String(object.eventStreamId);
                if (object.resolveLinkTos != null)
                    message.resolveLinkTos = Boolean(object.resolveLinkTos);
                return message;
            };

            /**
             * Creates a SubscribeToStream message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.SubscribeToStream.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream
             */
            SubscribeToStream.from = SubscribeToStream.fromObject;

            /**
             * Creates a plain object from a SubscribeToStream message. Also converts values to other types if specified.
             * @param {eventstore.proto.SubscribeToStream} message SubscribeToStream
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscribeToStream.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.eventStreamId = "";
                    object.resolveLinkTos = false;
                }
                if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                    object.eventStreamId = message.eventStreamId;
                if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                    object.resolveLinkTos = message.resolveLinkTos;
                return object;
            };

            /**
             * Creates a plain object from this SubscribeToStream message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscribeToStream.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this SubscribeToStream to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            SubscribeToStream.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SubscribeToStream;
        })();

        proto.SubscriptionConfirmation = (function() {

            /**
             * Properties of a SubscriptionConfirmation.
             * @typedef eventstore.proto.SubscriptionConfirmation$Properties
             * @type {Object}
             * @property {number|Long} lastCommitPosition SubscriptionConfirmation lastCommitPosition.
             * @property {number} [lastEventNumber] SubscriptionConfirmation lastEventNumber.
             */

            /**
             * Constructs a new SubscriptionConfirmation.
             * @exports eventstore.proto.SubscriptionConfirmation
             * @constructor
             * @param {eventstore.proto.SubscriptionConfirmation$Properties=} [properties] Properties to set
             */
            function SubscriptionConfirmation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SubscriptionConfirmation lastCommitPosition.
             * @type {number|Long}
             */
            SubscriptionConfirmation.prototype.lastCommitPosition = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * SubscriptionConfirmation lastEventNumber.
             * @type {number}
             */
            SubscriptionConfirmation.prototype.lastEventNumber = 0;

            /**
             * Creates a new SubscriptionConfirmation instance using the specified properties.
             * @param {eventstore.proto.SubscriptionConfirmation$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation instance
             */
            SubscriptionConfirmation.create = function create(properties) {
                return new SubscriptionConfirmation(properties);
            };

            /**
             * Encodes the specified SubscriptionConfirmation message. Does not implicitly {@link eventstore.proto.SubscriptionConfirmation.verify|verify} messages.
             * @param {eventstore.proto.SubscriptionConfirmation$Properties} message SubscriptionConfirmation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscriptionConfirmation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).int64(message.lastCommitPosition);
                if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                    writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.lastEventNumber);
                return writer;
            };

            /**
             * Encodes the specified SubscriptionConfirmation message, length delimited. Does not implicitly {@link eventstore.proto.SubscriptionConfirmation.verify|verify} messages.
             * @param {eventstore.proto.SubscriptionConfirmation$Properties} message SubscriptionConfirmation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscriptionConfirmation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SubscriptionConfirmation message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscriptionConfirmation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.SubscriptionConfirmation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.lastCommitPosition = reader.int64();
                            break;
                        case 2:
                            message.lastEventNumber = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("lastCommitPosition"))
                    throw $util.ProtocolError("missing required 'lastCommitPosition'", { instance: message });
                return message;
            };

            /**
             * Decodes a SubscriptionConfirmation message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscriptionConfirmation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SubscriptionConfirmation message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            SubscriptionConfirmation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.lastCommitPosition) && !(message.lastCommitPosition && $util.isInteger(message.lastCommitPosition.low) && $util.isInteger(message.lastCommitPosition.high)))
                    return "lastCommitPosition: integer|Long expected";
                if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                    if (!$util.isInteger(message.lastEventNumber))
                        return "lastEventNumber: integer expected";
                return null;
            };

            /**
             * Creates a SubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation
             */
            SubscriptionConfirmation.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.SubscriptionConfirmation)
                    return object;
                var message = new $root.eventstore.proto.SubscriptionConfirmation();
                if (object.lastCommitPosition != null)
                    if ($util.Long)
                        (message.lastCommitPosition = $util.Long.fromValue(object.lastCommitPosition)).unsigned = false;
                    else if (typeof object.lastCommitPosition === "string")
                    message.lastCommitPosition = parseInt(object.lastCommitPosition, 10);
                else if (typeof object.lastCommitPosition === "number")
                    message.lastCommitPosition = object.lastCommitPosition;
                else if (typeof object.lastCommitPosition === "object")
                    message.lastCommitPosition = new $util.LongBits(object.lastCommitPosition.low >>> 0, object.lastCommitPosition.high >>> 0).toNumber();
                if (object.lastEventNumber != null)
                    message.lastEventNumber = object.lastEventNumber | 0;
                return message;
            };

            /**
             * Creates a SubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.SubscriptionConfirmation.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation
             */
            SubscriptionConfirmation.from = SubscriptionConfirmation.fromObject;

            /**
             * Creates a plain object from a SubscriptionConfirmation message. Also converts values to other types if specified.
             * @param {eventstore.proto.SubscriptionConfirmation} message SubscriptionConfirmation
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscriptionConfirmation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.lastCommitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastCommitPosition = options.longs === String ? "0" : 0;
                    object.lastEventNumber = 0;
                }
                if (message.lastCommitPosition != null && message.hasOwnProperty("lastCommitPosition"))
                    if (typeof message.lastCommitPosition === "number")
                        object.lastCommitPosition = options.longs === String ? String(message.lastCommitPosition) : message.lastCommitPosition;
                    else
                        object.lastCommitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.lastCommitPosition) : options.longs === Number ? new $util.LongBits(message.lastCommitPosition.low >>> 0, message.lastCommitPosition.high >>> 0).toNumber() : message.lastCommitPosition;
                if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                    object.lastEventNumber = message.lastEventNumber;
                return object;
            };

            /**
             * Creates a plain object from this SubscriptionConfirmation message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscriptionConfirmation.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this SubscriptionConfirmation to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            SubscriptionConfirmation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SubscriptionConfirmation;
        })();

        proto.StreamEventAppeared = (function() {

            /**
             * Properties of a StreamEventAppeared.
             * @typedef eventstore.proto.StreamEventAppeared$Properties
             * @type {Object}
             * @property {eventstore.proto.ResolvedEvent$Properties} event StreamEventAppeared event.
             */

            /**
             * Constructs a new StreamEventAppeared.
             * @exports eventstore.proto.StreamEventAppeared
             * @constructor
             * @param {eventstore.proto.StreamEventAppeared$Properties=} [properties] Properties to set
             */
            function StreamEventAppeared(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StreamEventAppeared event.
             * @type {eventstore.proto.ResolvedEvent$Properties}
             */
            StreamEventAppeared.prototype.event = null;

            /**
             * Creates a new StreamEventAppeared instance using the specified properties.
             * @param {eventstore.proto.StreamEventAppeared$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared instance
             */
            StreamEventAppeared.create = function create(properties) {
                return new StreamEventAppeared(properties);
            };

            /**
             * Encodes the specified StreamEventAppeared message. Does not implicitly {@link eventstore.proto.StreamEventAppeared.verify|verify} messages.
             * @param {eventstore.proto.StreamEventAppeared$Properties} message StreamEventAppeared message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamEventAppeared.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.eventstore.proto.ResolvedEvent.encode(message.event, writer.uint32( /* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified StreamEventAppeared message, length delimited. Does not implicitly {@link eventstore.proto.StreamEventAppeared.verify|verify} messages.
             * @param {eventstore.proto.StreamEventAppeared$Properties} message StreamEventAppeared message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamEventAppeared.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StreamEventAppeared message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamEventAppeared.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.StreamEventAppeared();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.event = $root.eventstore.proto.ResolvedEvent.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("event"))
                    throw $util.ProtocolError("missing required 'event'", { instance: message });
                return message;
            };

            /**
             * Decodes a StreamEventAppeared message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamEventAppeared.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StreamEventAppeared message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            StreamEventAppeared.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var error = $root.eventstore.proto.ResolvedEvent.verify(message.event);
                if (error)
                    return "event." + error;
                return null;
            };

            /**
             * Creates a StreamEventAppeared message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared
             */
            StreamEventAppeared.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.StreamEventAppeared)
                    return object;
                var message = new $root.eventstore.proto.StreamEventAppeared();
                if (object.event != null) {
                    if (typeof object.event !== "object")
                        throw TypeError(".eventstore.proto.StreamEventAppeared.event: object expected");
                    message.event = $root.eventstore.proto.ResolvedEvent.fromObject(object.event);
                }
                return message;
            };

            /**
             * Creates a StreamEventAppeared message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.StreamEventAppeared.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared
             */
            StreamEventAppeared.from = StreamEventAppeared.fromObject;

            /**
             * Creates a plain object from a StreamEventAppeared message. Also converts values to other types if specified.
             * @param {eventstore.proto.StreamEventAppeared} message StreamEventAppeared
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamEventAppeared.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.event = null;
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = $root.eventstore.proto.ResolvedEvent.toObject(message.event, options);
                return object;
            };

            /**
             * Creates a plain object from this StreamEventAppeared message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamEventAppeared.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this StreamEventAppeared to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            StreamEventAppeared.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StreamEventAppeared;
        })();

        proto.UnsubscribeFromStream = (function() {

            /**
             * Properties of an UnsubscribeFromStream.
             * @typedef eventstore.proto.UnsubscribeFromStream$Properties
             * @type {Object}
             */

            /**
             * Constructs a new UnsubscribeFromStream.
             * @exports eventstore.proto.UnsubscribeFromStream
             * @constructor
             * @param {eventstore.proto.UnsubscribeFromStream$Properties=} [properties] Properties to set
             */
            function UnsubscribeFromStream(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new UnsubscribeFromStream instance using the specified properties.
             * @param {eventstore.proto.UnsubscribeFromStream$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream instance
             */
            UnsubscribeFromStream.create = function create(properties) {
                return new UnsubscribeFromStream(properties);
            };

            /**
             * Encodes the specified UnsubscribeFromStream message. Does not implicitly {@link eventstore.proto.UnsubscribeFromStream.verify|verify} messages.
             * @param {eventstore.proto.UnsubscribeFromStream$Properties} message UnsubscribeFromStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnsubscribeFromStream.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified UnsubscribeFromStream message, length delimited. Does not implicitly {@link eventstore.proto.UnsubscribeFromStream.verify|verify} messages.
             * @param {eventstore.proto.UnsubscribeFromStream$Properties} message UnsubscribeFromStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnsubscribeFromStream.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UnsubscribeFromStream message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnsubscribeFromStream.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.UnsubscribeFromStream();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default: reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UnsubscribeFromStream message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnsubscribeFromStream.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UnsubscribeFromStream message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            UnsubscribeFromStream.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an UnsubscribeFromStream message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream
             */
            UnsubscribeFromStream.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.UnsubscribeFromStream)
                    return object;
                return new $root.eventstore.proto.UnsubscribeFromStream();
            };

            /**
             * Creates an UnsubscribeFromStream message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.UnsubscribeFromStream.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream
             */
            UnsubscribeFromStream.from = UnsubscribeFromStream.fromObject;

            /**
             * Creates a plain object from an UnsubscribeFromStream message. Also converts values to other types if specified.
             * @param {eventstore.proto.UnsubscribeFromStream} message UnsubscribeFromStream
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnsubscribeFromStream.toObject = function toObject() {
                return {};
            };

            /**
             * Creates a plain object from this UnsubscribeFromStream message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnsubscribeFromStream.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this UnsubscribeFromStream to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            UnsubscribeFromStream.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UnsubscribeFromStream;
        })();

        proto.SubscriptionDropped = (function() {

            /**
             * Properties of a SubscriptionDropped.
             * @typedef eventstore.proto.SubscriptionDropped$Properties
             * @type {Object}
             * @property {eventstore.proto.SubscriptionDropped.SubscriptionDropReason} [reason] SubscriptionDropped reason.
             */

            /**
             * Constructs a new SubscriptionDropped.
             * @exports eventstore.proto.SubscriptionDropped
             * @constructor
             * @param {eventstore.proto.SubscriptionDropped$Properties=} [properties] Properties to set
             */
            function SubscriptionDropped(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SubscriptionDropped reason.
             * @type {eventstore.proto.SubscriptionDropped.SubscriptionDropReason}
             */
            SubscriptionDropped.prototype.reason = 0;

            /**
             * Creates a new SubscriptionDropped instance using the specified properties.
             * @param {eventstore.proto.SubscriptionDropped$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped instance
             */
            SubscriptionDropped.create = function create(properties) {
                return new SubscriptionDropped(properties);
            };

            /**
             * Encodes the specified SubscriptionDropped message. Does not implicitly {@link eventstore.proto.SubscriptionDropped.verify|verify} messages.
             * @param {eventstore.proto.SubscriptionDropped$Properties} message SubscriptionDropped message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscriptionDropped.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reason != null && message.hasOwnProperty("reason"))
                    writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.reason);
                return writer;
            };

            /**
             * Encodes the specified SubscriptionDropped message, length delimited. Does not implicitly {@link eventstore.proto.SubscriptionDropped.verify|verify} messages.
             * @param {eventstore.proto.SubscriptionDropped$Properties} message SubscriptionDropped message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscriptionDropped.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SubscriptionDropped message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscriptionDropped.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.SubscriptionDropped();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.reason = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SubscriptionDropped message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscriptionDropped.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SubscriptionDropped message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            SubscriptionDropped.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.reason != null && message.hasOwnProperty("reason"))
                    switch (message.reason) {
                        default: return "reason: enum value expected";
                        case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                break;
                    }
                return null;
            };

            /**
             * Creates a SubscriptionDropped message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped
             */
            SubscriptionDropped.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.SubscriptionDropped)
                    return object;
                var message = new $root.eventstore.proto.SubscriptionDropped();
                switch (object.reason) {
                    case "Unsubscribed":
                    case 0:
                        message.reason = 0;
                        break;
                    case "AccessDenied":
                    case 1:
                        message.reason = 1;
                        break;
                    case "NotFound":
                    case 2:
                        message.reason = 2;
                        break;
                    case "PersistentSubscriptionDeleted":
                    case 3:
                        message.reason = 3;
                        break;
                    case "SubscriberMaxCountReached":
                    case 4:
                        message.reason = 4;
                        break;
                }
                return message;
            };

            /**
             * Creates a SubscriptionDropped message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.SubscriptionDropped.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped
             */
            SubscriptionDropped.from = SubscriptionDropped.fromObject;

            /**
             * Creates a plain object from a SubscriptionDropped message. Also converts values to other types if specified.
             * @param {eventstore.proto.SubscriptionDropped} message SubscriptionDropped
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscriptionDropped.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.reason = options.enums === String ? "Unsubscribed" : 0;
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = options.enums === String ? $root.eventstore.proto.SubscriptionDropped.SubscriptionDropReason[message.reason] : message.reason;
                return object;
            };

            /**
             * Creates a plain object from this SubscriptionDropped message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscriptionDropped.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this SubscriptionDropped to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            SubscriptionDropped.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * SubscriptionDropReason enum.
             * @name SubscriptionDropReason
             * @memberof eventstore.proto.SubscriptionDropped
             * @enum {number}
             * @property {number} Unsubscribed=0 Unsubscribed value
             * @property {number} AccessDenied=1 AccessDenied value
             * @property {number} NotFound=2 NotFound value
             * @property {number} PersistentSubscriptionDeleted=3 PersistentSubscriptionDeleted value
             * @property {number} SubscriberMaxCountReached=4 SubscriberMaxCountReached value
             */
            SubscriptionDropped.SubscriptionDropReason = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "Unsubscribed"] = 0;
                values[valuesById[1] = "AccessDenied"] = 1;
                values[valuesById[2] = "NotFound"] = 2;
                values[valuesById[3] = "PersistentSubscriptionDeleted"] = 3;
                values[valuesById[4] = "SubscriberMaxCountReached"] = 4;
                return values;
            })();

            return SubscriptionDropped;
        })();

        proto.NotHandled = (function() {

            /**
             * Properties of a NotHandled.
             * @typedef eventstore.proto.NotHandled$Properties
             * @type {Object}
             * @property {eventstore.proto.NotHandled.NotHandledReason} reason NotHandled reason.
             * @property {eventstore.proto.NotHandled.MasterInfo$Properties} [additionalInfo] NotHandled additionalInfo.
             */

            /**
             * Constructs a new NotHandled.
             * @exports eventstore.proto.NotHandled
             * @constructor
             * @param {eventstore.proto.NotHandled$Properties=} [properties] Properties to set
             */
            function NotHandled(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NotHandled reason.
             * @type {eventstore.proto.NotHandled.NotHandledReason}
             */
            NotHandled.prototype.reason = 0;

            /**
             * NotHandled additionalInfo.
             * @type {(eventstore.proto.NotHandled.MasterInfo$Properties|null)}
             */
            NotHandled.prototype.additionalInfo = null;

            /**
             * Creates a new NotHandled instance using the specified properties.
             * @param {eventstore.proto.NotHandled$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.NotHandled} NotHandled instance
             */
            NotHandled.create = function create(properties) {
                return new NotHandled(properties);
            };

            /**
             * Encodes the specified NotHandled message. Does not implicitly {@link eventstore.proto.NotHandled.verify|verify} messages.
             * @param {eventstore.proto.NotHandled$Properties} message NotHandled message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotHandled.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.reason);
                if (message.additionalInfo != null && message.hasOwnProperty("additionalInfo"))
                    $root.eventstore.proto.NotHandled.MasterInfo.encode(message.additionalInfo, writer.uint32( /* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NotHandled message, length delimited. Does not implicitly {@link eventstore.proto.NotHandled.verify|verify} messages.
             * @param {eventstore.proto.NotHandled$Properties} message NotHandled message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotHandled.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotHandled message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.NotHandled} NotHandled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotHandled.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.NotHandled();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.reason = reader.uint32();
                            break;
                        case 2:
                            message.additionalInfo = $root.eventstore.proto.NotHandled.MasterInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("reason"))
                    throw $util.ProtocolError("missing required 'reason'", { instance: message });
                return message;
            };

            /**
             * Decodes a NotHandled message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.NotHandled} NotHandled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotHandled.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotHandled message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            NotHandled.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.reason) {
                    default: return "reason: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            break;
                }
                if (message.additionalInfo != null && message.hasOwnProperty("additionalInfo")) {
                    var error = $root.eventstore.proto.NotHandled.MasterInfo.verify(message.additionalInfo);
                    if (error)
                        return "additionalInfo." + error;
                }
                return null;
            };

            /**
             * Creates a NotHandled message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.NotHandled} NotHandled
             */
            NotHandled.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.NotHandled)
                    return object;
                var message = new $root.eventstore.proto.NotHandled();
                switch (object.reason) {
                    case "NotReady":
                    case 0:
                        message.reason = 0;
                        break;
                    case "TooBusy":
                    case 1:
                        message.reason = 1;
                        break;
                    case "NotMaster":
                    case 2:
                        message.reason = 2;
                        break;
                }
                if (object.additionalInfo != null) {
                    if (typeof object.additionalInfo !== "object")
                        throw TypeError(".eventstore.proto.NotHandled.additionalInfo: object expected");
                    message.additionalInfo = $root.eventstore.proto.NotHandled.MasterInfo.fromObject(object.additionalInfo);
                }
                return message;
            };

            /**
             * Creates a NotHandled message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.NotHandled.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.NotHandled} NotHandled
             */
            NotHandled.from = NotHandled.fromObject;

            /**
             * Creates a plain object from a NotHandled message. Also converts values to other types if specified.
             * @param {eventstore.proto.NotHandled} message NotHandled
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotHandled.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.reason = options.enums === String ? "NotReady" : 0;
                    object.additionalInfo = null;
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = options.enums === String ? $root.eventstore.proto.NotHandled.NotHandledReason[message.reason] : message.reason;
                if (message.additionalInfo != null && message.hasOwnProperty("additionalInfo"))
                    object.additionalInfo = $root.eventstore.proto.NotHandled.MasterInfo.toObject(message.additionalInfo, options);
                return object;
            };

            /**
             * Creates a plain object from this NotHandled message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotHandled.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this NotHandled to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            NotHandled.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * NotHandledReason enum.
             * @name NotHandledReason
             * @memberof eventstore.proto.NotHandled
             * @enum {number}
             * @property {number} NotReady=0 NotReady value
             * @property {number} TooBusy=1 TooBusy value
             * @property {number} NotMaster=2 NotMaster value
             */
            NotHandled.NotHandledReason = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "NotReady"] = 0;
                values[valuesById[1] = "TooBusy"] = 1;
                values[valuesById[2] = "NotMaster"] = 2;
                return values;
            })();

            NotHandled.MasterInfo = (function() {

                /**
                 * Properties of a MasterInfo.
                 * @typedef eventstore.proto.NotHandled.MasterInfo$Properties
                 * @type {Object}
                 * @property {string} externalTcpAddress MasterInfo externalTcpAddress.
                 * @property {number} externalTcpPort MasterInfo externalTcpPort.
                 * @property {string} externalHttpAddress MasterInfo externalHttpAddress.
                 * @property {number} externalHttpPort MasterInfo externalHttpPort.
                 * @property {string} [externalSecureTcpAddress] MasterInfo externalSecureTcpAddress.
                 * @property {number} [externalSecureTcpPort] MasterInfo externalSecureTcpPort.
                 */

                /**
                 * Constructs a new MasterInfo.
                 * @exports eventstore.proto.NotHandled.MasterInfo
                 * @constructor
                 * @param {eventstore.proto.NotHandled.MasterInfo$Properties=} [properties] Properties to set
                 */
                function MasterInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MasterInfo externalTcpAddress.
                 * @type {string}
                 */
                MasterInfo.prototype.externalTcpAddress = "";

                /**
                 * MasterInfo externalTcpPort.
                 * @type {number}
                 */
                MasterInfo.prototype.externalTcpPort = 0;

                /**
                 * MasterInfo externalHttpAddress.
                 * @type {string}
                 */
                MasterInfo.prototype.externalHttpAddress = "";

                /**
                 * MasterInfo externalHttpPort.
                 * @type {number}
                 */
                MasterInfo.prototype.externalHttpPort = 0;

                /**
                 * MasterInfo externalSecureTcpAddress.
                 * @type {string}
                 */
                MasterInfo.prototype.externalSecureTcpAddress = "";

                /**
                 * MasterInfo externalSecureTcpPort.
                 * @type {number}
                 */
                MasterInfo.prototype.externalSecureTcpPort = 0;

                /**
                 * Creates a new MasterInfo instance using the specified properties.
                 * @param {eventstore.proto.NotHandled.MasterInfo$Properties=} [properties] Properties to set
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo instance
                 */
                MasterInfo.create = function create(properties) {
                    return new MasterInfo(properties);
                };

                /**
                 * Encodes the specified MasterInfo message. Does not implicitly {@link eventstore.proto.NotHandled.MasterInfo.verify|verify} messages.
                 * @param {eventstore.proto.NotHandled.MasterInfo$Properties} message MasterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MasterInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.externalTcpAddress);
                    writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.externalTcpPort);
                    writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.externalHttpAddress);
                    writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.externalHttpPort);
                    if (message.externalSecureTcpAddress != null && message.hasOwnProperty("externalSecureTcpAddress"))
                        writer.uint32( /* id 5, wireType 2 =*/ 42).string(message.externalSecureTcpAddress);
                    if (message.externalSecureTcpPort != null && message.hasOwnProperty("externalSecureTcpPort"))
                        writer.uint32( /* id 6, wireType 0 =*/ 48).int32(message.externalSecureTcpPort);
                    return writer;
                };

                /**
                 * Encodes the specified MasterInfo message, length delimited. Does not implicitly {@link eventstore.proto.NotHandled.MasterInfo.verify|verify} messages.
                 * @param {eventstore.proto.NotHandled.MasterInfo$Properties} message MasterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MasterInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MasterInfo message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MasterInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length,
                        message = new $root.eventstore.proto.NotHandled.MasterInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.externalTcpAddress = reader.string();
                                break;
                            case 2:
                                message.externalTcpPort = reader.int32();
                                break;
                            case 3:
                                message.externalHttpAddress = reader.string();
                                break;
                            case 4:
                                message.externalHttpPort = reader.int32();
                                break;
                            case 5:
                                message.externalSecureTcpAddress = reader.string();
                                break;
                            case 6:
                                message.externalSecureTcpPort = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    if (!message.hasOwnProperty("externalTcpAddress"))
                        throw $util.ProtocolError("missing required 'externalTcpAddress'", { instance: message });
                    if (!message.hasOwnProperty("externalTcpPort"))
                        throw $util.ProtocolError("missing required 'externalTcpPort'", { instance: message });
                    if (!message.hasOwnProperty("externalHttpAddress"))
                        throw $util.ProtocolError("missing required 'externalHttpAddress'", { instance: message });
                    if (!message.hasOwnProperty("externalHttpPort"))
                        throw $util.ProtocolError("missing required 'externalHttpPort'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a MasterInfo message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MasterInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MasterInfo message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                MasterInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.externalTcpAddress))
                        return "externalTcpAddress: string expected";
                    if (!$util.isInteger(message.externalTcpPort))
                        return "externalTcpPort: integer expected";
                    if (!$util.isString(message.externalHttpAddress))
                        return "externalHttpAddress: string expected";
                    if (!$util.isInteger(message.externalHttpPort))
                        return "externalHttpPort: integer expected";
                    if (message.externalSecureTcpAddress != null && message.hasOwnProperty("externalSecureTcpAddress"))
                        if (!$util.isString(message.externalSecureTcpAddress))
                            return "externalSecureTcpAddress: string expected";
                    if (message.externalSecureTcpPort != null && message.hasOwnProperty("externalSecureTcpPort"))
                        if (!$util.isInteger(message.externalSecureTcpPort))
                            return "externalSecureTcpPort: integer expected";
                    return null;
                };

                /**
                 * Creates a MasterInfo message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo
                 */
                MasterInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.eventstore.proto.NotHandled.MasterInfo)
                        return object;
                    var message = new $root.eventstore.proto.NotHandled.MasterInfo();
                    if (object.externalTcpAddress != null)
                        message.externalTcpAddress = String(object.externalTcpAddress);
                    if (object.externalTcpPort != null)
                        message.externalTcpPort = object.externalTcpPort | 0;
                    if (object.externalHttpAddress != null)
                        message.externalHttpAddress = String(object.externalHttpAddress);
                    if (object.externalHttpPort != null)
                        message.externalHttpPort = object.externalHttpPort | 0;
                    if (object.externalSecureTcpAddress != null)
                        message.externalSecureTcpAddress = String(object.externalSecureTcpAddress);
                    if (object.externalSecureTcpPort != null)
                        message.externalSecureTcpPort = object.externalSecureTcpPort | 0;
                    return message;
                };

                /**
                 * Creates a MasterInfo message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link eventstore.proto.NotHandled.MasterInfo.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo
                 */
                MasterInfo.from = MasterInfo.fromObject;

                /**
                 * Creates a plain object from a MasterInfo message. Also converts values to other types if specified.
                 * @param {eventstore.proto.NotHandled.MasterInfo} message MasterInfo
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MasterInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.externalTcpAddress = "";
                        object.externalTcpPort = 0;
                        object.externalHttpAddress = "";
                        object.externalHttpPort = 0;
                        object.externalSecureTcpAddress = "";
                        object.externalSecureTcpPort = 0;
                    }
                    if (message.externalTcpAddress != null && message.hasOwnProperty("externalTcpAddress"))
                        object.externalTcpAddress = message.externalTcpAddress;
                    if (message.externalTcpPort != null && message.hasOwnProperty("externalTcpPort"))
                        object.externalTcpPort = message.externalTcpPort;
                    if (message.externalHttpAddress != null && message.hasOwnProperty("externalHttpAddress"))
                        object.externalHttpAddress = message.externalHttpAddress;
                    if (message.externalHttpPort != null && message.hasOwnProperty("externalHttpPort"))
                        object.externalHttpPort = message.externalHttpPort;
                    if (message.externalSecureTcpAddress != null && message.hasOwnProperty("externalSecureTcpAddress"))
                        object.externalSecureTcpAddress = message.externalSecureTcpAddress;
                    if (message.externalSecureTcpPort != null && message.hasOwnProperty("externalSecureTcpPort"))
                        object.externalSecureTcpPort = message.externalSecureTcpPort;
                    return object;
                };

                /**
                 * Creates a plain object from this MasterInfo message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MasterInfo.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this MasterInfo to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                MasterInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MasterInfo;
            })();

            return NotHandled;
        })();

        proto.ScavengeDatabase = (function() {

            /**
             * Properties of a ScavengeDatabase.
             * @typedef eventstore.proto.ScavengeDatabase$Properties
             * @type {Object}
             */

            /**
             * Constructs a new ScavengeDatabase.
             * @exports eventstore.proto.ScavengeDatabase
             * @constructor
             * @param {eventstore.proto.ScavengeDatabase$Properties=} [properties] Properties to set
             */
            function ScavengeDatabase(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ScavengeDatabase instance using the specified properties.
             * @param {eventstore.proto.ScavengeDatabase$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase instance
             */
            ScavengeDatabase.create = function create(properties) {
                return new ScavengeDatabase(properties);
            };

            /**
             * Encodes the specified ScavengeDatabase message. Does not implicitly {@link eventstore.proto.ScavengeDatabase.verify|verify} messages.
             * @param {eventstore.proto.ScavengeDatabase$Properties} message ScavengeDatabase message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScavengeDatabase.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ScavengeDatabase message, length delimited. Does not implicitly {@link eventstore.proto.ScavengeDatabase.verify|verify} messages.
             * @param {eventstore.proto.ScavengeDatabase$Properties} message ScavengeDatabase message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScavengeDatabase.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ScavengeDatabase message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScavengeDatabase.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ScavengeDatabase();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default: reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ScavengeDatabase message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScavengeDatabase.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ScavengeDatabase message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ScavengeDatabase.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a ScavengeDatabase message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase
             */
            ScavengeDatabase.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ScavengeDatabase)
                    return object;
                return new $root.eventstore.proto.ScavengeDatabase();
            };

            /**
             * Creates a ScavengeDatabase message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ScavengeDatabase.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase
             */
            ScavengeDatabase.from = ScavengeDatabase.fromObject;

            /**
             * Creates a plain object from a ScavengeDatabase message. Also converts values to other types if specified.
             * @param {eventstore.proto.ScavengeDatabase} message ScavengeDatabase
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ScavengeDatabase.toObject = function toObject() {
                return {};
            };

            /**
             * Creates a plain object from this ScavengeDatabase message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ScavengeDatabase.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ScavengeDatabase to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ScavengeDatabase.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ScavengeDatabase;
        })();

        proto.ScavengeDatabaseCompleted = (function() {

            /**
             * Properties of a ScavengeDatabaseCompleted.
             * @typedef eventstore.proto.ScavengeDatabaseCompleted$Properties
             * @type {Object}
             * @property {eventstore.proto.ScavengeDatabaseCompleted.ScavengeResult} result ScavengeDatabaseCompleted result.
             * @property {string} [error] ScavengeDatabaseCompleted error.
             * @property {number} totalTimeMs ScavengeDatabaseCompleted totalTimeMs.
             * @property {number|Long} totalSpaceSaved ScavengeDatabaseCompleted totalSpaceSaved.
             */

            /**
             * Constructs a new ScavengeDatabaseCompleted.
             * @exports eventstore.proto.ScavengeDatabaseCompleted
             * @constructor
             * @param {eventstore.proto.ScavengeDatabaseCompleted$Properties=} [properties] Properties to set
             */
            function ScavengeDatabaseCompleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ScavengeDatabaseCompleted result.
             * @type {eventstore.proto.ScavengeDatabaseCompleted.ScavengeResult}
             */
            ScavengeDatabaseCompleted.prototype.result = 0;

            /**
             * ScavengeDatabaseCompleted error.
             * @type {string}
             */
            ScavengeDatabaseCompleted.prototype.error = "";

            /**
             * ScavengeDatabaseCompleted totalTimeMs.
             * @type {number}
             */
            ScavengeDatabaseCompleted.prototype.totalTimeMs = 0;

            /**
             * ScavengeDatabaseCompleted totalSpaceSaved.
             * @type {number|Long}
             */
            ScavengeDatabaseCompleted.prototype.totalSpaceSaved = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

            /**
             * Creates a new ScavengeDatabaseCompleted instance using the specified properties.
             * @param {eventstore.proto.ScavengeDatabaseCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted instance
             */
            ScavengeDatabaseCompleted.create = function create(properties) {
                return new ScavengeDatabaseCompleted(properties);
            };

            /**
             * Encodes the specified ScavengeDatabaseCompleted message. Does not implicitly {@link eventstore.proto.ScavengeDatabaseCompleted.verify|verify} messages.
             * @param {eventstore.proto.ScavengeDatabaseCompleted$Properties} message ScavengeDatabaseCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScavengeDatabaseCompleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.result);
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.error);
                writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.totalTimeMs);
                writer.uint32( /* id 4, wireType 0 =*/ 32).int64(message.totalSpaceSaved);
                return writer;
            };

            /**
             * Encodes the specified ScavengeDatabaseCompleted message, length delimited. Does not implicitly {@link eventstore.proto.ScavengeDatabaseCompleted.verify|verify} messages.
             * @param {eventstore.proto.ScavengeDatabaseCompleted$Properties} message ScavengeDatabaseCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScavengeDatabaseCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ScavengeDatabaseCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScavengeDatabaseCompleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.eventstore.proto.ScavengeDatabaseCompleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.result = reader.uint32();
                            break;
                        case 2:
                            message.error = reader.string();
                            break;
                        case 3:
                            message.totalTimeMs = reader.int32();
                            break;
                        case 4:
                            message.totalSpaceSaved = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("totalTimeMs"))
                    throw $util.ProtocolError("missing required 'totalTimeMs'", { instance: message });
                if (!message.hasOwnProperty("totalSpaceSaved"))
                    throw $util.ProtocolError("missing required 'totalSpaceSaved'", { instance: message });
                return message;
            };

            /**
             * Decodes a ScavengeDatabaseCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScavengeDatabaseCompleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ScavengeDatabaseCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ScavengeDatabaseCompleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.result) {
                    default: return "result: enum value expected";
                    case 0:
                            case 1:
                            case 2:
                            break;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                if (!$util.isInteger(message.totalTimeMs))
                    return "totalTimeMs: integer expected";
                if (!$util.isInteger(message.totalSpaceSaved) && !(message.totalSpaceSaved && $util.isInteger(message.totalSpaceSaved.low) && $util.isInteger(message.totalSpaceSaved.high)))
                    return "totalSpaceSaved: integer|Long expected";
                return null;
            };

            /**
             * Creates a ScavengeDatabaseCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
             */
            ScavengeDatabaseCompleted.fromObject = function fromObject(object) {
                if (object instanceof $root.eventstore.proto.ScavengeDatabaseCompleted)
                    return object;
                var message = new $root.eventstore.proto.ScavengeDatabaseCompleted();
                switch (object.result) {
                    case "Success":
                    case 0:
                        message.result = 0;
                        break;
                    case "InProgress":
                    case 1:
                        message.result = 1;
                        break;
                    case "Failed":
                    case 2:
                        message.result = 2;
                        break;
                }
                if (object.error != null)
                    message.error = String(object.error);
                if (object.totalTimeMs != null)
                    message.totalTimeMs = object.totalTimeMs | 0;
                if (object.totalSpaceSaved != null)
                    if ($util.Long)
                        (message.totalSpaceSaved = $util.Long.fromValue(object.totalSpaceSaved)).unsigned = false;
                    else if (typeof object.totalSpaceSaved === "string")
                    message.totalSpaceSaved = parseInt(object.totalSpaceSaved, 10);
                else if (typeof object.totalSpaceSaved === "number")
                    message.totalSpaceSaved = object.totalSpaceSaved;
                else if (typeof object.totalSpaceSaved === "object")
                    message.totalSpaceSaved = new $util.LongBits(object.totalSpaceSaved.low >>> 0, object.totalSpaceSaved.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a ScavengeDatabaseCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ScavengeDatabaseCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
             */
            ScavengeDatabaseCompleted.from = ScavengeDatabaseCompleted.fromObject;

            /**
             * Creates a plain object from a ScavengeDatabaseCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.ScavengeDatabaseCompleted} message ScavengeDatabaseCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ScavengeDatabaseCompleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.result = options.enums === String ? "Success" : 0;
                    object.error = "";
                    object.totalTimeMs = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.totalSpaceSaved = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.totalSpaceSaved = options.longs === String ? "0" : 0;
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.eventstore.proto.ScavengeDatabaseCompleted.ScavengeResult[message.result] : message.result;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                if (message.totalTimeMs != null && message.hasOwnProperty("totalTimeMs"))
                    object.totalTimeMs = message.totalTimeMs;
                if (message.totalSpaceSaved != null && message.hasOwnProperty("totalSpaceSaved"))
                    if (typeof message.totalSpaceSaved === "number")
                        object.totalSpaceSaved = options.longs === String ? String(message.totalSpaceSaved) : message.totalSpaceSaved;
                    else
                        object.totalSpaceSaved = options.longs === String ? $util.Long.prototype.toString.call(message.totalSpaceSaved) : options.longs === Number ? new $util.LongBits(message.totalSpaceSaved.low >>> 0, message.totalSpaceSaved.high >>> 0).toNumber() : message.totalSpaceSaved;
                return object;
            };

            /**
             * Creates a plain object from this ScavengeDatabaseCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ScavengeDatabaseCompleted.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ScavengeDatabaseCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ScavengeDatabaseCompleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * ScavengeResult enum.
             * @name ScavengeResult
             * @memberof eventstore.proto.ScavengeDatabaseCompleted
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} InProgress=1 InProgress value
             * @property {number} Failed=2 Failed value
             */
            ScavengeDatabaseCompleted.ScavengeResult = (function() {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "InProgress"] = 1;
                values[valuesById[2] = "Failed"] = 2;
                return values;
            })();

            return ScavengeDatabaseCompleted;
        })();

        return proto;
    })();

    return eventstore;
})();

module.exports = $root;