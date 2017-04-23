import * as $protobuf from "protobufjs";

/**
 * Namespace eventstore.
 * @exports eventstore
 * @namespace
 */
export namespace eventstore {

    /**
     * Namespace proto.
     * @exports eventstore.proto
     * @namespace
     */
    namespace proto {

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
        enum OperationResult {
            Success = 0,
            PrepareTimeout = 1,
            CommitTimeout = 2,
            ForwardTimeout = 3,
            WrongExpectedVersion = 4,
            StreamDeleted = 5,
            InvalidTransaction = 6,
            AccessDenied = 7
        }

        type NewEvent$Properties = {
            eventId: Uint8Array;
            eventType: string;
            dataContentType: number;
            metadataContentType: number;
            data: Uint8Array;
            metadata?: Uint8Array;
        };

        /**
         * Constructs a new NewEvent.
         * @exports eventstore.proto.NewEvent
         * @constructor
         * @param {eventstore.proto.NewEvent$Properties=} [properties] Properties to set
         */
        class NewEvent {

            /**
             * Constructs a new NewEvent.
             * @exports eventstore.proto.NewEvent
             * @constructor
             * @param {eventstore.proto.NewEvent$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.NewEvent$Properties);

            /**
             * NewEvent eventId.
             * @type {Uint8Array}
             */
            public eventId: Uint8Array;

            /**
             * NewEvent eventType.
             * @type {string}
             */
            public eventType: string;

            /**
             * NewEvent dataContentType.
             * @type {number}
             */
            public dataContentType: number;

            /**
             * NewEvent metadataContentType.
             * @type {number}
             */
            public metadataContentType: number;

            /**
             * NewEvent data.
             * @type {Uint8Array}
             */
            public data: Uint8Array;

            /**
             * NewEvent metadata.
             * @type {Uint8Array}
             */
            public metadata: Uint8Array;

            /**
             * Creates a new NewEvent instance using the specified properties.
             * @param {eventstore.proto.NewEvent$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.NewEvent} NewEvent instance
             */
            public static create(properties?: eventstore.proto.NewEvent$Properties): eventstore.proto.NewEvent;

            /**
             * Encodes the specified NewEvent message. Does not implicitly {@link eventstore.proto.NewEvent.verify|verify} messages.
             * @param {eventstore.proto.NewEvent$Properties} message NewEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.NewEvent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NewEvent message, length delimited. Does not implicitly {@link eventstore.proto.NewEvent.verify|verify} messages.
             * @param {eventstore.proto.NewEvent$Properties} message NewEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.NewEvent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewEvent message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.NewEvent} NewEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.NewEvent;

            /**
             * Decodes a NewEvent message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.NewEvent} NewEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.NewEvent;

            /**
             * Verifies a NewEvent message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a NewEvent message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.NewEvent} NewEvent
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.NewEvent;

            /**
             * Creates a NewEvent message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.NewEvent.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.NewEvent} NewEvent
             */
            public static from(object: { [k: string]: any }): eventstore.proto.NewEvent;

            /**
             * Creates a plain object from a NewEvent message. Also converts values to other types if specified.
             * @param {eventstore.proto.NewEvent} message NewEvent
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.NewEvent, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this NewEvent message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this NewEvent to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type EventRecord$Properties = {
            eventStreamId: string;
            eventNumber: number;
            eventId: Uint8Array;
            eventType: string;
            dataContentType: number;
            metadataContentType: number;
            data: Uint8Array;
            metadata?: Uint8Array;
            created?: (number|Long);
            createdEpoch?: (number|Long);
        };

        /**
         * Constructs a new EventRecord.
         * @exports eventstore.proto.EventRecord
         * @constructor
         * @param {eventstore.proto.EventRecord$Properties=} [properties] Properties to set
         */
        class EventRecord {

            /**
             * Constructs a new EventRecord.
             * @exports eventstore.proto.EventRecord
             * @constructor
             * @param {eventstore.proto.EventRecord$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.EventRecord$Properties);

            /**
             * EventRecord eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * EventRecord eventNumber.
             * @type {number}
             */
            public eventNumber: number;

            /**
             * EventRecord eventId.
             * @type {Uint8Array}
             */
            public eventId: Uint8Array;

            /**
             * EventRecord eventType.
             * @type {string}
             */
            public eventType: string;

            /**
             * EventRecord dataContentType.
             * @type {number}
             */
            public dataContentType: number;

            /**
             * EventRecord metadataContentType.
             * @type {number}
             */
            public metadataContentType: number;

            /**
             * EventRecord data.
             * @type {Uint8Array}
             */
            public data: Uint8Array;

            /**
             * EventRecord metadata.
             * @type {Uint8Array}
             */
            public metadata: Uint8Array;

            /**
             * EventRecord created.
             * @type {number|Long}
             */
            public created: (number|Long);

            /**
             * EventRecord createdEpoch.
             * @type {number|Long}
             */
            public createdEpoch: (number|Long);

            /**
             * Creates a new EventRecord instance using the specified properties.
             * @param {eventstore.proto.EventRecord$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.EventRecord} EventRecord instance
             */
            public static create(properties?: eventstore.proto.EventRecord$Properties): eventstore.proto.EventRecord;

            /**
             * Encodes the specified EventRecord message. Does not implicitly {@link eventstore.proto.EventRecord.verify|verify} messages.
             * @param {eventstore.proto.EventRecord$Properties} message EventRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.EventRecord$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EventRecord message, length delimited. Does not implicitly {@link eventstore.proto.EventRecord.verify|verify} messages.
             * @param {eventstore.proto.EventRecord$Properties} message EventRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.EventRecord$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EventRecord message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.EventRecord} EventRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.EventRecord;

            /**
             * Decodes an EventRecord message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.EventRecord} EventRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.EventRecord;

            /**
             * Verifies an EventRecord message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates an EventRecord message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.EventRecord} EventRecord
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.EventRecord;

            /**
             * Creates an EventRecord message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.EventRecord.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.EventRecord} EventRecord
             */
            public static from(object: { [k: string]: any }): eventstore.proto.EventRecord;

            /**
             * Creates a plain object from an EventRecord message. Also converts values to other types if specified.
             * @param {eventstore.proto.EventRecord} message EventRecord
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.EventRecord, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this EventRecord message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this EventRecord to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type ResolvedIndexedEvent$Properties = {
            event?: eventstore.proto.EventRecord$Properties;
            link?: eventstore.proto.EventRecord$Properties;
        };

        /**
         * Constructs a new ResolvedIndexedEvent.
         * @exports eventstore.proto.ResolvedIndexedEvent
         * @constructor
         * @param {eventstore.proto.ResolvedIndexedEvent$Properties=} [properties] Properties to set
         */
        class ResolvedIndexedEvent {

            /**
             * Constructs a new ResolvedIndexedEvent.
             * @exports eventstore.proto.ResolvedIndexedEvent
             * @constructor
             * @param {eventstore.proto.ResolvedIndexedEvent$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ResolvedIndexedEvent$Properties);

            /**
             * ResolvedIndexedEvent event.
             * @type {(eventstore.proto.EventRecord$Properties|null)}
             */
            public event: (eventstore.proto.EventRecord$Properties|null);

            /**
             * ResolvedIndexedEvent link.
             * @type {(eventstore.proto.EventRecord$Properties|null)}
             */
            public link: (eventstore.proto.EventRecord$Properties|null);

            /**
             * Creates a new ResolvedIndexedEvent instance using the specified properties.
             * @param {eventstore.proto.ResolvedIndexedEvent$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent instance
             */
            public static create(properties?: eventstore.proto.ResolvedIndexedEvent$Properties): eventstore.proto.ResolvedIndexedEvent;

            /**
             * Encodes the specified ResolvedIndexedEvent message. Does not implicitly {@link eventstore.proto.ResolvedIndexedEvent.verify|verify} messages.
             * @param {eventstore.proto.ResolvedIndexedEvent$Properties} message ResolvedIndexedEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ResolvedIndexedEvent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResolvedIndexedEvent message, length delimited. Does not implicitly {@link eventstore.proto.ResolvedIndexedEvent.verify|verify} messages.
             * @param {eventstore.proto.ResolvedIndexedEvent$Properties} message ResolvedIndexedEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ResolvedIndexedEvent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResolvedIndexedEvent message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ResolvedIndexedEvent;

            /**
             * Decodes a ResolvedIndexedEvent message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ResolvedIndexedEvent;

            /**
             * Verifies a ResolvedIndexedEvent message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ResolvedIndexedEvent message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ResolvedIndexedEvent;

            /**
             * Creates a ResolvedIndexedEvent message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ResolvedIndexedEvent.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ResolvedIndexedEvent} ResolvedIndexedEvent
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ResolvedIndexedEvent;

            /**
             * Creates a plain object from a ResolvedIndexedEvent message. Also converts values to other types if specified.
             * @param {eventstore.proto.ResolvedIndexedEvent} message ResolvedIndexedEvent
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ResolvedIndexedEvent, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ResolvedIndexedEvent message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ResolvedIndexedEvent to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type ResolvedEvent$Properties = {
            event?: eventstore.proto.EventRecord$Properties;
            link?: eventstore.proto.EventRecord$Properties;
            commitPosition: (number|Long);
            preparePosition: (number|Long);
        };

        /**
         * Constructs a new ResolvedEvent.
         * @exports eventstore.proto.ResolvedEvent
         * @constructor
         * @param {eventstore.proto.ResolvedEvent$Properties=} [properties] Properties to set
         */
        class ResolvedEvent {

            /**
             * Constructs a new ResolvedEvent.
             * @exports eventstore.proto.ResolvedEvent
             * @constructor
             * @param {eventstore.proto.ResolvedEvent$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ResolvedEvent$Properties);

            /**
             * ResolvedEvent event.
             * @type {(eventstore.proto.EventRecord$Properties|null)}
             */
            public event: (eventstore.proto.EventRecord$Properties|null);

            /**
             * ResolvedEvent link.
             * @type {(eventstore.proto.EventRecord$Properties|null)}
             */
            public link: (eventstore.proto.EventRecord$Properties|null);

            /**
             * ResolvedEvent commitPosition.
             * @type {number|Long}
             */
            public commitPosition: (number|Long);

            /**
             * ResolvedEvent preparePosition.
             * @type {number|Long}
             */
            public preparePosition: (number|Long);

            /**
             * Creates a new ResolvedEvent instance using the specified properties.
             * @param {eventstore.proto.ResolvedEvent$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent instance
             */
            public static create(properties?: eventstore.proto.ResolvedEvent$Properties): eventstore.proto.ResolvedEvent;

            /**
             * Encodes the specified ResolvedEvent message. Does not implicitly {@link eventstore.proto.ResolvedEvent.verify|verify} messages.
             * @param {eventstore.proto.ResolvedEvent$Properties} message ResolvedEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ResolvedEvent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResolvedEvent message, length delimited. Does not implicitly {@link eventstore.proto.ResolvedEvent.verify|verify} messages.
             * @param {eventstore.proto.ResolvedEvent$Properties} message ResolvedEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ResolvedEvent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResolvedEvent message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ResolvedEvent;

            /**
             * Decodes a ResolvedEvent message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ResolvedEvent;

            /**
             * Verifies a ResolvedEvent message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ResolvedEvent message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ResolvedEvent;

            /**
             * Creates a ResolvedEvent message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ResolvedEvent.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ResolvedEvent} ResolvedEvent
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ResolvedEvent;

            /**
             * Creates a plain object from a ResolvedEvent message. Also converts values to other types if specified.
             * @param {eventstore.proto.ResolvedEvent} message ResolvedEvent
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ResolvedEvent, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ResolvedEvent message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ResolvedEvent to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type WriteEvents$Properties = {
            eventStreamId: string;
            expectedVersion: number;
            events?: eventstore.proto.NewEvent$Properties[];
            requireMaster: boolean;
        };

        /**
         * Constructs a new WriteEvents.
         * @exports eventstore.proto.WriteEvents
         * @constructor
         * @param {eventstore.proto.WriteEvents$Properties=} [properties] Properties to set
         */
        class WriteEvents {

            /**
             * Constructs a new WriteEvents.
             * @exports eventstore.proto.WriteEvents
             * @constructor
             * @param {eventstore.proto.WriteEvents$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.WriteEvents$Properties);

            /**
             * WriteEvents eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * WriteEvents expectedVersion.
             * @type {number}
             */
            public expectedVersion: number;

            /**
             * WriteEvents events.
             * @type {Array.<eventstore.proto.NewEvent$Properties>}
             */
            public events: eventstore.proto.NewEvent$Properties[];

            /**
             * WriteEvents requireMaster.
             * @type {boolean}
             */
            public requireMaster: boolean;

            /**
             * Creates a new WriteEvents instance using the specified properties.
             * @param {eventstore.proto.WriteEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.WriteEvents} WriteEvents instance
             */
            public static create(properties?: eventstore.proto.WriteEvents$Properties): eventstore.proto.WriteEvents;

            /**
             * Encodes the specified WriteEvents message. Does not implicitly {@link eventstore.proto.WriteEvents.verify|verify} messages.
             * @param {eventstore.proto.WriteEvents$Properties} message WriteEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.WriteEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteEvents message, length delimited. Does not implicitly {@link eventstore.proto.WriteEvents.verify|verify} messages.
             * @param {eventstore.proto.WriteEvents$Properties} message WriteEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.WriteEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.WriteEvents} WriteEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.WriteEvents;

            /**
             * Decodes a WriteEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.WriteEvents} WriteEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.WriteEvents;

            /**
             * Verifies a WriteEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a WriteEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.WriteEvents} WriteEvents
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.WriteEvents;

            /**
             * Creates a WriteEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.WriteEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.WriteEvents} WriteEvents
             */
            public static from(object: { [k: string]: any }): eventstore.proto.WriteEvents;

            /**
             * Creates a plain object from a WriteEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.WriteEvents} message WriteEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.WriteEvents, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this WriteEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type WriteEventsCompleted$Properties = {
            result: eventstore.proto.OperationResult;
            message?: string;
            firstEventNumber: number;
            lastEventNumber: number;
            preparePosition?: (number|Long);
            commitPosition?: (number|Long);
        };

        /**
         * Constructs a new WriteEventsCompleted.
         * @exports eventstore.proto.WriteEventsCompleted
         * @constructor
         * @param {eventstore.proto.WriteEventsCompleted$Properties=} [properties] Properties to set
         */
        class WriteEventsCompleted {

            /**
             * Constructs a new WriteEventsCompleted.
             * @exports eventstore.proto.WriteEventsCompleted
             * @constructor
             * @param {eventstore.proto.WriteEventsCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.WriteEventsCompleted$Properties);

            /**
             * WriteEventsCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            public result: eventstore.proto.OperationResult;

            /**
             * WriteEventsCompleted message.
             * @type {string}
             */
            public message: string;

            /**
             * WriteEventsCompleted firstEventNumber.
             * @type {number}
             */
            public firstEventNumber: number;

            /**
             * WriteEventsCompleted lastEventNumber.
             * @type {number}
             */
            public lastEventNumber: number;

            /**
             * WriteEventsCompleted preparePosition.
             * @type {number|Long}
             */
            public preparePosition: (number|Long);

            /**
             * WriteEventsCompleted commitPosition.
             * @type {number|Long}
             */
            public commitPosition: (number|Long);

            /**
             * Creates a new WriteEventsCompleted instance using the specified properties.
             * @param {eventstore.proto.WriteEventsCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted instance
             */
            public static create(properties?: eventstore.proto.WriteEventsCompleted$Properties): eventstore.proto.WriteEventsCompleted;

            /**
             * Encodes the specified WriteEventsCompleted message. Does not implicitly {@link eventstore.proto.WriteEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.WriteEventsCompleted$Properties} message WriteEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.WriteEventsCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteEventsCompleted message, length delimited. Does not implicitly {@link eventstore.proto.WriteEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.WriteEventsCompleted$Properties} message WriteEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.WriteEventsCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteEventsCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.WriteEventsCompleted;

            /**
             * Decodes a WriteEventsCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.WriteEventsCompleted;

            /**
             * Verifies a WriteEventsCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a WriteEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.WriteEventsCompleted;

            /**
             * Creates a WriteEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.WriteEventsCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.WriteEventsCompleted} WriteEventsCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.WriteEventsCompleted;

            /**
             * Creates a plain object from a WriteEventsCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.WriteEventsCompleted} message WriteEventsCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.WriteEventsCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this WriteEventsCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteEventsCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type DeleteStream$Properties = {
            eventStreamId: string;
            expectedVersion: number;
            requireMaster: boolean;
            hardDelete?: boolean;
        };

        /**
         * Constructs a new DeleteStream.
         * @exports eventstore.proto.DeleteStream
         * @constructor
         * @param {eventstore.proto.DeleteStream$Properties=} [properties] Properties to set
         */
        class DeleteStream {

            /**
             * Constructs a new DeleteStream.
             * @exports eventstore.proto.DeleteStream
             * @constructor
             * @param {eventstore.proto.DeleteStream$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.DeleteStream$Properties);

            /**
             * DeleteStream eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * DeleteStream expectedVersion.
             * @type {number}
             */
            public expectedVersion: number;

            /**
             * DeleteStream requireMaster.
             * @type {boolean}
             */
            public requireMaster: boolean;

            /**
             * DeleteStream hardDelete.
             * @type {boolean}
             */
            public hardDelete: boolean;

            /**
             * Creates a new DeleteStream instance using the specified properties.
             * @param {eventstore.proto.DeleteStream$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.DeleteStream} DeleteStream instance
             */
            public static create(properties?: eventstore.proto.DeleteStream$Properties): eventstore.proto.DeleteStream;

            /**
             * Encodes the specified DeleteStream message. Does not implicitly {@link eventstore.proto.DeleteStream.verify|verify} messages.
             * @param {eventstore.proto.DeleteStream$Properties} message DeleteStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.DeleteStream$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteStream message, length delimited. Does not implicitly {@link eventstore.proto.DeleteStream.verify|verify} messages.
             * @param {eventstore.proto.DeleteStream$Properties} message DeleteStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.DeleteStream$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteStream message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.DeleteStream} DeleteStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.DeleteStream;

            /**
             * Decodes a DeleteStream message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.DeleteStream} DeleteStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.DeleteStream;

            /**
             * Verifies a DeleteStream message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a DeleteStream message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeleteStream} DeleteStream
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.DeleteStream;

            /**
             * Creates a DeleteStream message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.DeleteStream.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeleteStream} DeleteStream
             */
            public static from(object: { [k: string]: any }): eventstore.proto.DeleteStream;

            /**
             * Creates a plain object from a DeleteStream message. Also converts values to other types if specified.
             * @param {eventstore.proto.DeleteStream} message DeleteStream
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.DeleteStream, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this DeleteStream message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteStream to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type DeleteStreamCompleted$Properties = {
            result: eventstore.proto.OperationResult;
            message?: string;
            preparePosition?: (number|Long);
            commitPosition?: (number|Long);
        };

        /**
         * Constructs a new DeleteStreamCompleted.
         * @exports eventstore.proto.DeleteStreamCompleted
         * @constructor
         * @param {eventstore.proto.DeleteStreamCompleted$Properties=} [properties] Properties to set
         */
        class DeleteStreamCompleted {

            /**
             * Constructs a new DeleteStreamCompleted.
             * @exports eventstore.proto.DeleteStreamCompleted
             * @constructor
             * @param {eventstore.proto.DeleteStreamCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.DeleteStreamCompleted$Properties);

            /**
             * DeleteStreamCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            public result: eventstore.proto.OperationResult;

            /**
             * DeleteStreamCompleted message.
             * @type {string}
             */
            public message: string;

            /**
             * DeleteStreamCompleted preparePosition.
             * @type {number|Long}
             */
            public preparePosition: (number|Long);

            /**
             * DeleteStreamCompleted commitPosition.
             * @type {number|Long}
             */
            public commitPosition: (number|Long);

            /**
             * Creates a new DeleteStreamCompleted instance using the specified properties.
             * @param {eventstore.proto.DeleteStreamCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted instance
             */
            public static create(properties?: eventstore.proto.DeleteStreamCompleted$Properties): eventstore.proto.DeleteStreamCompleted;

            /**
             * Encodes the specified DeleteStreamCompleted message. Does not implicitly {@link eventstore.proto.DeleteStreamCompleted.verify|verify} messages.
             * @param {eventstore.proto.DeleteStreamCompleted$Properties} message DeleteStreamCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.DeleteStreamCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteStreamCompleted message, length delimited. Does not implicitly {@link eventstore.proto.DeleteStreamCompleted.verify|verify} messages.
             * @param {eventstore.proto.DeleteStreamCompleted$Properties} message DeleteStreamCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.DeleteStreamCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteStreamCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.DeleteStreamCompleted;

            /**
             * Decodes a DeleteStreamCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.DeleteStreamCompleted;

            /**
             * Verifies a DeleteStreamCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a DeleteStreamCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.DeleteStreamCompleted;

            /**
             * Creates a DeleteStreamCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.DeleteStreamCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeleteStreamCompleted} DeleteStreamCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.DeleteStreamCompleted;

            /**
             * Creates a plain object from a DeleteStreamCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.DeleteStreamCompleted} message DeleteStreamCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.DeleteStreamCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this DeleteStreamCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteStreamCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type TransactionStart$Properties = {
            eventStreamId: string;
            expectedVersion: number;
            requireMaster: boolean;
        };

        /**
         * Constructs a new TransactionStart.
         * @exports eventstore.proto.TransactionStart
         * @constructor
         * @param {eventstore.proto.TransactionStart$Properties=} [properties] Properties to set
         */
        class TransactionStart {

            /**
             * Constructs a new TransactionStart.
             * @exports eventstore.proto.TransactionStart
             * @constructor
             * @param {eventstore.proto.TransactionStart$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.TransactionStart$Properties);

            /**
             * TransactionStart eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * TransactionStart expectedVersion.
             * @type {number}
             */
            public expectedVersion: number;

            /**
             * TransactionStart requireMaster.
             * @type {boolean}
             */
            public requireMaster: boolean;

            /**
             * Creates a new TransactionStart instance using the specified properties.
             * @param {eventstore.proto.TransactionStart$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionStart} TransactionStart instance
             */
            public static create(properties?: eventstore.proto.TransactionStart$Properties): eventstore.proto.TransactionStart;

            /**
             * Encodes the specified TransactionStart message. Does not implicitly {@link eventstore.proto.TransactionStart.verify|verify} messages.
             * @param {eventstore.proto.TransactionStart$Properties} message TransactionStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.TransactionStart$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransactionStart message, length delimited. Does not implicitly {@link eventstore.proto.TransactionStart.verify|verify} messages.
             * @param {eventstore.proto.TransactionStart$Properties} message TransactionStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.TransactionStart$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransactionStart message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionStart} TransactionStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.TransactionStart;

            /**
             * Decodes a TransactionStart message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionStart} TransactionStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.TransactionStart;

            /**
             * Verifies a TransactionStart message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a TransactionStart message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionStart} TransactionStart
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.TransactionStart;

            /**
             * Creates a TransactionStart message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionStart.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionStart} TransactionStart
             */
            public static from(object: { [k: string]: any }): eventstore.proto.TransactionStart;

            /**
             * Creates a plain object from a TransactionStart message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionStart} message TransactionStart
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.TransactionStart, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this TransactionStart message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this TransactionStart to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type TransactionStartCompleted$Properties = {
            transactionId: (number|Long);
            result: eventstore.proto.OperationResult;
            message?: string;
        };

        /**
         * Constructs a new TransactionStartCompleted.
         * @exports eventstore.proto.TransactionStartCompleted
         * @constructor
         * @param {eventstore.proto.TransactionStartCompleted$Properties=} [properties] Properties to set
         */
        class TransactionStartCompleted {

            /**
             * Constructs a new TransactionStartCompleted.
             * @exports eventstore.proto.TransactionStartCompleted
             * @constructor
             * @param {eventstore.proto.TransactionStartCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.TransactionStartCompleted$Properties);

            /**
             * TransactionStartCompleted transactionId.
             * @type {number|Long}
             */
            public transactionId: (number|Long);

            /**
             * TransactionStartCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            public result: eventstore.proto.OperationResult;

            /**
             * TransactionStartCompleted message.
             * @type {string}
             */
            public message: string;

            /**
             * Creates a new TransactionStartCompleted instance using the specified properties.
             * @param {eventstore.proto.TransactionStartCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted instance
             */
            public static create(properties?: eventstore.proto.TransactionStartCompleted$Properties): eventstore.proto.TransactionStartCompleted;

            /**
             * Encodes the specified TransactionStartCompleted message. Does not implicitly {@link eventstore.proto.TransactionStartCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionStartCompleted$Properties} message TransactionStartCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.TransactionStartCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransactionStartCompleted message, length delimited. Does not implicitly {@link eventstore.proto.TransactionStartCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionStartCompleted$Properties} message TransactionStartCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.TransactionStartCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransactionStartCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.TransactionStartCompleted;

            /**
             * Decodes a TransactionStartCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.TransactionStartCompleted;

            /**
             * Verifies a TransactionStartCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a TransactionStartCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.TransactionStartCompleted;

            /**
             * Creates a TransactionStartCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionStartCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionStartCompleted} TransactionStartCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.TransactionStartCompleted;

            /**
             * Creates a plain object from a TransactionStartCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionStartCompleted} message TransactionStartCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.TransactionStartCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this TransactionStartCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this TransactionStartCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type TransactionWrite$Properties = {
            transactionId: (number|Long);
            events?: eventstore.proto.NewEvent$Properties[];
            requireMaster: boolean;
        };

        /**
         * Constructs a new TransactionWrite.
         * @exports eventstore.proto.TransactionWrite
         * @constructor
         * @param {eventstore.proto.TransactionWrite$Properties=} [properties] Properties to set
         */
        class TransactionWrite {

            /**
             * Constructs a new TransactionWrite.
             * @exports eventstore.proto.TransactionWrite
             * @constructor
             * @param {eventstore.proto.TransactionWrite$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.TransactionWrite$Properties);

            /**
             * TransactionWrite transactionId.
             * @type {number|Long}
             */
            public transactionId: (number|Long);

            /**
             * TransactionWrite events.
             * @type {Array.<eventstore.proto.NewEvent$Properties>}
             */
            public events: eventstore.proto.NewEvent$Properties[];

            /**
             * TransactionWrite requireMaster.
             * @type {boolean}
             */
            public requireMaster: boolean;

            /**
             * Creates a new TransactionWrite instance using the specified properties.
             * @param {eventstore.proto.TransactionWrite$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite instance
             */
            public static create(properties?: eventstore.proto.TransactionWrite$Properties): eventstore.proto.TransactionWrite;

            /**
             * Encodes the specified TransactionWrite message. Does not implicitly {@link eventstore.proto.TransactionWrite.verify|verify} messages.
             * @param {eventstore.proto.TransactionWrite$Properties} message TransactionWrite message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.TransactionWrite$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransactionWrite message, length delimited. Does not implicitly {@link eventstore.proto.TransactionWrite.verify|verify} messages.
             * @param {eventstore.proto.TransactionWrite$Properties} message TransactionWrite message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.TransactionWrite$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransactionWrite message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.TransactionWrite;

            /**
             * Decodes a TransactionWrite message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.TransactionWrite;

            /**
             * Verifies a TransactionWrite message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a TransactionWrite message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.TransactionWrite;

            /**
             * Creates a TransactionWrite message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionWrite.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionWrite} TransactionWrite
             */
            public static from(object: { [k: string]: any }): eventstore.proto.TransactionWrite;

            /**
             * Creates a plain object from a TransactionWrite message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionWrite} message TransactionWrite
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.TransactionWrite, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this TransactionWrite message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this TransactionWrite to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type TransactionWriteCompleted$Properties = {
            transactionId: (number|Long);
            result: eventstore.proto.OperationResult;
            message?: string;
        };

        /**
         * Constructs a new TransactionWriteCompleted.
         * @exports eventstore.proto.TransactionWriteCompleted
         * @constructor
         * @param {eventstore.proto.TransactionWriteCompleted$Properties=} [properties] Properties to set
         */
        class TransactionWriteCompleted {

            /**
             * Constructs a new TransactionWriteCompleted.
             * @exports eventstore.proto.TransactionWriteCompleted
             * @constructor
             * @param {eventstore.proto.TransactionWriteCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.TransactionWriteCompleted$Properties);

            /**
             * TransactionWriteCompleted transactionId.
             * @type {number|Long}
             */
            public transactionId: (number|Long);

            /**
             * TransactionWriteCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            public result: eventstore.proto.OperationResult;

            /**
             * TransactionWriteCompleted message.
             * @type {string}
             */
            public message: string;

            /**
             * Creates a new TransactionWriteCompleted instance using the specified properties.
             * @param {eventstore.proto.TransactionWriteCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted instance
             */
            public static create(properties?: eventstore.proto.TransactionWriteCompleted$Properties): eventstore.proto.TransactionWriteCompleted;

            /**
             * Encodes the specified TransactionWriteCompleted message. Does not implicitly {@link eventstore.proto.TransactionWriteCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionWriteCompleted$Properties} message TransactionWriteCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.TransactionWriteCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransactionWriteCompleted message, length delimited. Does not implicitly {@link eventstore.proto.TransactionWriteCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionWriteCompleted$Properties} message TransactionWriteCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.TransactionWriteCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransactionWriteCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.TransactionWriteCompleted;

            /**
             * Decodes a TransactionWriteCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.TransactionWriteCompleted;

            /**
             * Verifies a TransactionWriteCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a TransactionWriteCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.TransactionWriteCompleted;

            /**
             * Creates a TransactionWriteCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionWriteCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionWriteCompleted} TransactionWriteCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.TransactionWriteCompleted;

            /**
             * Creates a plain object from a TransactionWriteCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionWriteCompleted} message TransactionWriteCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.TransactionWriteCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this TransactionWriteCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this TransactionWriteCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type TransactionCommit$Properties = {
            transactionId: (number|Long);
            requireMaster: boolean;
        };

        /**
         * Constructs a new TransactionCommit.
         * @exports eventstore.proto.TransactionCommit
         * @constructor
         * @param {eventstore.proto.TransactionCommit$Properties=} [properties] Properties to set
         */
        class TransactionCommit {

            /**
             * Constructs a new TransactionCommit.
             * @exports eventstore.proto.TransactionCommit
             * @constructor
             * @param {eventstore.proto.TransactionCommit$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.TransactionCommit$Properties);

            /**
             * TransactionCommit transactionId.
             * @type {number|Long}
             */
            public transactionId: (number|Long);

            /**
             * TransactionCommit requireMaster.
             * @type {boolean}
             */
            public requireMaster: boolean;

            /**
             * Creates a new TransactionCommit instance using the specified properties.
             * @param {eventstore.proto.TransactionCommit$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit instance
             */
            public static create(properties?: eventstore.proto.TransactionCommit$Properties): eventstore.proto.TransactionCommit;

            /**
             * Encodes the specified TransactionCommit message. Does not implicitly {@link eventstore.proto.TransactionCommit.verify|verify} messages.
             * @param {eventstore.proto.TransactionCommit$Properties} message TransactionCommit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.TransactionCommit$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransactionCommit message, length delimited. Does not implicitly {@link eventstore.proto.TransactionCommit.verify|verify} messages.
             * @param {eventstore.proto.TransactionCommit$Properties} message TransactionCommit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.TransactionCommit$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransactionCommit message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.TransactionCommit;

            /**
             * Decodes a TransactionCommit message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.TransactionCommit;

            /**
             * Verifies a TransactionCommit message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a TransactionCommit message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.TransactionCommit;

            /**
             * Creates a TransactionCommit message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionCommit.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionCommit} TransactionCommit
             */
            public static from(object: { [k: string]: any }): eventstore.proto.TransactionCommit;

            /**
             * Creates a plain object from a TransactionCommit message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionCommit} message TransactionCommit
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.TransactionCommit, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this TransactionCommit message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this TransactionCommit to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type TransactionCommitCompleted$Properties = {
            transactionId: (number|Long);
            result: eventstore.proto.OperationResult;
            message?: string;
            firstEventNumber: number;
            lastEventNumber: number;
            preparePosition?: (number|Long);
            commitPosition?: (number|Long);
        };

        /**
         * Constructs a new TransactionCommitCompleted.
         * @exports eventstore.proto.TransactionCommitCompleted
         * @constructor
         * @param {eventstore.proto.TransactionCommitCompleted$Properties=} [properties] Properties to set
         */
        class TransactionCommitCompleted {

            /**
             * Constructs a new TransactionCommitCompleted.
             * @exports eventstore.proto.TransactionCommitCompleted
             * @constructor
             * @param {eventstore.proto.TransactionCommitCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.TransactionCommitCompleted$Properties);

            /**
             * TransactionCommitCompleted transactionId.
             * @type {number|Long}
             */
            public transactionId: (number|Long);

            /**
             * TransactionCommitCompleted result.
             * @type {eventstore.proto.OperationResult}
             */
            public result: eventstore.proto.OperationResult;

            /**
             * TransactionCommitCompleted message.
             * @type {string}
             */
            public message: string;

            /**
             * TransactionCommitCompleted firstEventNumber.
             * @type {number}
             */
            public firstEventNumber: number;

            /**
             * TransactionCommitCompleted lastEventNumber.
             * @type {number}
             */
            public lastEventNumber: number;

            /**
             * TransactionCommitCompleted preparePosition.
             * @type {number|Long}
             */
            public preparePosition: (number|Long);

            /**
             * TransactionCommitCompleted commitPosition.
             * @type {number|Long}
             */
            public commitPosition: (number|Long);

            /**
             * Creates a new TransactionCommitCompleted instance using the specified properties.
             * @param {eventstore.proto.TransactionCommitCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted instance
             */
            public static create(properties?: eventstore.proto.TransactionCommitCompleted$Properties): eventstore.proto.TransactionCommitCompleted;

            /**
             * Encodes the specified TransactionCommitCompleted message. Does not implicitly {@link eventstore.proto.TransactionCommitCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionCommitCompleted$Properties} message TransactionCommitCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.TransactionCommitCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransactionCommitCompleted message, length delimited. Does not implicitly {@link eventstore.proto.TransactionCommitCompleted.verify|verify} messages.
             * @param {eventstore.proto.TransactionCommitCompleted$Properties} message TransactionCommitCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.TransactionCommitCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransactionCommitCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.TransactionCommitCompleted;

            /**
             * Decodes a TransactionCommitCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.TransactionCommitCompleted;

            /**
             * Verifies a TransactionCommitCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a TransactionCommitCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.TransactionCommitCompleted;

            /**
             * Creates a TransactionCommitCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.TransactionCommitCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.TransactionCommitCompleted} TransactionCommitCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.TransactionCommitCompleted;

            /**
             * Creates a plain object from a TransactionCommitCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.TransactionCommitCompleted} message TransactionCommitCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.TransactionCommitCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this TransactionCommitCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this TransactionCommitCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type ReadEvent$Properties = {
            eventStreamId: string;
            eventNumber: number;
            resolveLinkTos: boolean;
            requireMaster: boolean;
        };

        /**
         * Constructs a new ReadEvent.
         * @exports eventstore.proto.ReadEvent
         * @constructor
         * @param {eventstore.proto.ReadEvent$Properties=} [properties] Properties to set
         */
        class ReadEvent {

            /**
             * Constructs a new ReadEvent.
             * @exports eventstore.proto.ReadEvent
             * @constructor
             * @param {eventstore.proto.ReadEvent$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ReadEvent$Properties);

            /**
             * ReadEvent eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * ReadEvent eventNumber.
             * @type {number}
             */
            public eventNumber: number;

            /**
             * ReadEvent resolveLinkTos.
             * @type {boolean}
             */
            public resolveLinkTos: boolean;

            /**
             * ReadEvent requireMaster.
             * @type {boolean}
             */
            public requireMaster: boolean;

            /**
             * Creates a new ReadEvent instance using the specified properties.
             * @param {eventstore.proto.ReadEvent$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadEvent} ReadEvent instance
             */
            public static create(properties?: eventstore.proto.ReadEvent$Properties): eventstore.proto.ReadEvent;

            /**
             * Encodes the specified ReadEvent message. Does not implicitly {@link eventstore.proto.ReadEvent.verify|verify} messages.
             * @param {eventstore.proto.ReadEvent$Properties} message ReadEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ReadEvent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadEvent message, length delimited. Does not implicitly {@link eventstore.proto.ReadEvent.verify|verify} messages.
             * @param {eventstore.proto.ReadEvent$Properties} message ReadEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ReadEvent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadEvent message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadEvent} ReadEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ReadEvent;

            /**
             * Decodes a ReadEvent message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadEvent} ReadEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ReadEvent;

            /**
             * Verifies a ReadEvent message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ReadEvent message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadEvent} ReadEvent
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ReadEvent;

            /**
             * Creates a ReadEvent message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadEvent.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadEvent} ReadEvent
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ReadEvent;

            /**
             * Creates a plain object from a ReadEvent message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadEvent} message ReadEvent
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ReadEvent, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ReadEvent message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadEvent to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type ReadEventCompleted$Properties = {
            result: eventstore.proto.ReadEventCompleted.ReadEventResult;
            event: eventstore.proto.ResolvedIndexedEvent$Properties;
            error?: string;
        };

        /**
         * Constructs a new ReadEventCompleted.
         * @exports eventstore.proto.ReadEventCompleted
         * @constructor
         * @param {eventstore.proto.ReadEventCompleted$Properties=} [properties] Properties to set
         */
        class ReadEventCompleted {

            /**
             * Constructs a new ReadEventCompleted.
             * @exports eventstore.proto.ReadEventCompleted
             * @constructor
             * @param {eventstore.proto.ReadEventCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ReadEventCompleted$Properties);

            /**
             * ReadEventCompleted result.
             * @type {eventstore.proto.ReadEventCompleted.ReadEventResult}
             */
            public result: eventstore.proto.ReadEventCompleted.ReadEventResult;

            /**
             * ReadEventCompleted event.
             * @type {eventstore.proto.ResolvedIndexedEvent$Properties}
             */
            public event: eventstore.proto.ResolvedIndexedEvent$Properties;

            /**
             * ReadEventCompleted error.
             * @type {string}
             */
            public error: string;

            /**
             * Creates a new ReadEventCompleted instance using the specified properties.
             * @param {eventstore.proto.ReadEventCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted instance
             */
            public static create(properties?: eventstore.proto.ReadEventCompleted$Properties): eventstore.proto.ReadEventCompleted;

            /**
             * Encodes the specified ReadEventCompleted message. Does not implicitly {@link eventstore.proto.ReadEventCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadEventCompleted$Properties} message ReadEventCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ReadEventCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadEventCompleted message, length delimited. Does not implicitly {@link eventstore.proto.ReadEventCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadEventCompleted$Properties} message ReadEventCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ReadEventCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadEventCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ReadEventCompleted;

            /**
             * Decodes a ReadEventCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ReadEventCompleted;

            /**
             * Verifies a ReadEventCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ReadEventCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ReadEventCompleted;

            /**
             * Creates a ReadEventCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadEventCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadEventCompleted} ReadEventCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ReadEventCompleted;

            /**
             * Creates a plain object from a ReadEventCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadEventCompleted} message ReadEventCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ReadEventCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ReadEventCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadEventCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ReadEventCompleted {

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
            enum ReadEventResult {
                Success = 0,
                NotFound = 1,
                NoStream = 2,
                StreamDeleted = 3,
                Error = 4,
                AccessDenied = 5
            }
        }

        type ReadStreamEvents$Properties = {
            eventStreamId: string;
            fromEventNumber: number;
            maxCount: number;
            resolveLinkTos: boolean;
            requireMaster: boolean;
        };

        /**
         * Constructs a new ReadStreamEvents.
         * @exports eventstore.proto.ReadStreamEvents
         * @constructor
         * @param {eventstore.proto.ReadStreamEvents$Properties=} [properties] Properties to set
         */
        class ReadStreamEvents {

            /**
             * Constructs a new ReadStreamEvents.
             * @exports eventstore.proto.ReadStreamEvents
             * @constructor
             * @param {eventstore.proto.ReadStreamEvents$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ReadStreamEvents$Properties);

            /**
             * ReadStreamEvents eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * ReadStreamEvents fromEventNumber.
             * @type {number}
             */
            public fromEventNumber: number;

            /**
             * ReadStreamEvents maxCount.
             * @type {number}
             */
            public maxCount: number;

            /**
             * ReadStreamEvents resolveLinkTos.
             * @type {boolean}
             */
            public resolveLinkTos: boolean;

            /**
             * ReadStreamEvents requireMaster.
             * @type {boolean}
             */
            public requireMaster: boolean;

            /**
             * Creates a new ReadStreamEvents instance using the specified properties.
             * @param {eventstore.proto.ReadStreamEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents instance
             */
            public static create(properties?: eventstore.proto.ReadStreamEvents$Properties): eventstore.proto.ReadStreamEvents;

            /**
             * Encodes the specified ReadStreamEvents message. Does not implicitly {@link eventstore.proto.ReadStreamEvents.verify|verify} messages.
             * @param {eventstore.proto.ReadStreamEvents$Properties} message ReadStreamEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ReadStreamEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadStreamEvents message, length delimited. Does not implicitly {@link eventstore.proto.ReadStreamEvents.verify|verify} messages.
             * @param {eventstore.proto.ReadStreamEvents$Properties} message ReadStreamEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ReadStreamEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadStreamEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ReadStreamEvents;

            /**
             * Decodes a ReadStreamEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ReadStreamEvents;

            /**
             * Verifies a ReadStreamEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ReadStreamEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ReadStreamEvents;

            /**
             * Creates a ReadStreamEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadStreamEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadStreamEvents} ReadStreamEvents
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ReadStreamEvents;

            /**
             * Creates a plain object from a ReadStreamEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadStreamEvents} message ReadStreamEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ReadStreamEvents, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ReadStreamEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadStreamEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type ReadStreamEventsCompleted$Properties = {
            events?: eventstore.proto.ResolvedIndexedEvent$Properties[];
            result: eventstore.proto.ReadStreamEventsCompleted.ReadStreamResult;
            nextEventNumber: number;
            lastEventNumber: number;
            isEndOfStream: boolean;
            lastCommitPosition: (number|Long);
            error?: string;
        };

        /**
         * Constructs a new ReadStreamEventsCompleted.
         * @exports eventstore.proto.ReadStreamEventsCompleted
         * @constructor
         * @param {eventstore.proto.ReadStreamEventsCompleted$Properties=} [properties] Properties to set
         */
        class ReadStreamEventsCompleted {

            /**
             * Constructs a new ReadStreamEventsCompleted.
             * @exports eventstore.proto.ReadStreamEventsCompleted
             * @constructor
             * @param {eventstore.proto.ReadStreamEventsCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ReadStreamEventsCompleted$Properties);

            /**
             * ReadStreamEventsCompleted events.
             * @type {Array.<eventstore.proto.ResolvedIndexedEvent$Properties>}
             */
            public events: eventstore.proto.ResolvedIndexedEvent$Properties[];

            /**
             * ReadStreamEventsCompleted result.
             * @type {eventstore.proto.ReadStreamEventsCompleted.ReadStreamResult}
             */
            public result: eventstore.proto.ReadStreamEventsCompleted.ReadStreamResult;

            /**
             * ReadStreamEventsCompleted nextEventNumber.
             * @type {number}
             */
            public nextEventNumber: number;

            /**
             * ReadStreamEventsCompleted lastEventNumber.
             * @type {number}
             */
            public lastEventNumber: number;

            /**
             * ReadStreamEventsCompleted isEndOfStream.
             * @type {boolean}
             */
            public isEndOfStream: boolean;

            /**
             * ReadStreamEventsCompleted lastCommitPosition.
             * @type {number|Long}
             */
            public lastCommitPosition: (number|Long);

            /**
             * ReadStreamEventsCompleted error.
             * @type {string}
             */
            public error: string;

            /**
             * Creates a new ReadStreamEventsCompleted instance using the specified properties.
             * @param {eventstore.proto.ReadStreamEventsCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted instance
             */
            public static create(properties?: eventstore.proto.ReadStreamEventsCompleted$Properties): eventstore.proto.ReadStreamEventsCompleted;

            /**
             * Encodes the specified ReadStreamEventsCompleted message. Does not implicitly {@link eventstore.proto.ReadStreamEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadStreamEventsCompleted$Properties} message ReadStreamEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ReadStreamEventsCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadStreamEventsCompleted message, length delimited. Does not implicitly {@link eventstore.proto.ReadStreamEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadStreamEventsCompleted$Properties} message ReadStreamEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ReadStreamEventsCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadStreamEventsCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ReadStreamEventsCompleted;

            /**
             * Decodes a ReadStreamEventsCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ReadStreamEventsCompleted;

            /**
             * Verifies a ReadStreamEventsCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ReadStreamEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ReadStreamEventsCompleted;

            /**
             * Creates a ReadStreamEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadStreamEventsCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadStreamEventsCompleted} ReadStreamEventsCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ReadStreamEventsCompleted;

            /**
             * Creates a plain object from a ReadStreamEventsCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadStreamEventsCompleted} message ReadStreamEventsCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ReadStreamEventsCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ReadStreamEventsCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadStreamEventsCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ReadStreamEventsCompleted {

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
            enum ReadStreamResult {
                Success = 0,
                NoStream = 1,
                StreamDeleted = 2,
                NotModified = 3,
                Error = 4,
                AccessDenied = 5
            }
        }

        type ReadAllEvents$Properties = {
            commitPosition: (number|Long);
            preparePosition: (number|Long);
            maxCount: number;
            resolveLinkTos: boolean;
            requireMaster: boolean;
        };

        /**
         * Constructs a new ReadAllEvents.
         * @exports eventstore.proto.ReadAllEvents
         * @constructor
         * @param {eventstore.proto.ReadAllEvents$Properties=} [properties] Properties to set
         */
        class ReadAllEvents {

            /**
             * Constructs a new ReadAllEvents.
             * @exports eventstore.proto.ReadAllEvents
             * @constructor
             * @param {eventstore.proto.ReadAllEvents$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ReadAllEvents$Properties);

            /**
             * ReadAllEvents commitPosition.
             * @type {number|Long}
             */
            public commitPosition: (number|Long);

            /**
             * ReadAllEvents preparePosition.
             * @type {number|Long}
             */
            public preparePosition: (number|Long);

            /**
             * ReadAllEvents maxCount.
             * @type {number}
             */
            public maxCount: number;

            /**
             * ReadAllEvents resolveLinkTos.
             * @type {boolean}
             */
            public resolveLinkTos: boolean;

            /**
             * ReadAllEvents requireMaster.
             * @type {boolean}
             */
            public requireMaster: boolean;

            /**
             * Creates a new ReadAllEvents instance using the specified properties.
             * @param {eventstore.proto.ReadAllEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents instance
             */
            public static create(properties?: eventstore.proto.ReadAllEvents$Properties): eventstore.proto.ReadAllEvents;

            /**
             * Encodes the specified ReadAllEvents message. Does not implicitly {@link eventstore.proto.ReadAllEvents.verify|verify} messages.
             * @param {eventstore.proto.ReadAllEvents$Properties} message ReadAllEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ReadAllEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadAllEvents message, length delimited. Does not implicitly {@link eventstore.proto.ReadAllEvents.verify|verify} messages.
             * @param {eventstore.proto.ReadAllEvents$Properties} message ReadAllEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ReadAllEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadAllEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ReadAllEvents;

            /**
             * Decodes a ReadAllEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ReadAllEvents;

            /**
             * Verifies a ReadAllEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ReadAllEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ReadAllEvents;

            /**
             * Creates a ReadAllEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadAllEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadAllEvents} ReadAllEvents
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ReadAllEvents;

            /**
             * Creates a plain object from a ReadAllEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadAllEvents} message ReadAllEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ReadAllEvents, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ReadAllEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadAllEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type ReadAllEventsCompleted$Properties = {
            commitPosition: (number|Long);
            preparePosition: (number|Long);
            events?: eventstore.proto.ResolvedEvent$Properties[];
            nextCommitPosition: (number|Long);
            nextPreparePosition: (number|Long);
            result?: eventstore.proto.ReadAllEventsCompleted.ReadAllResult;
            error?: string;
        };

        /**
         * Constructs a new ReadAllEventsCompleted.
         * @exports eventstore.proto.ReadAllEventsCompleted
         * @constructor
         * @param {eventstore.proto.ReadAllEventsCompleted$Properties=} [properties] Properties to set
         */
        class ReadAllEventsCompleted {

            /**
             * Constructs a new ReadAllEventsCompleted.
             * @exports eventstore.proto.ReadAllEventsCompleted
             * @constructor
             * @param {eventstore.proto.ReadAllEventsCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ReadAllEventsCompleted$Properties);

            /**
             * ReadAllEventsCompleted commitPosition.
             * @type {number|Long}
             */
            public commitPosition: (number|Long);

            /**
             * ReadAllEventsCompleted preparePosition.
             * @type {number|Long}
             */
            public preparePosition: (number|Long);

            /**
             * ReadAllEventsCompleted events.
             * @type {Array.<eventstore.proto.ResolvedEvent$Properties>}
             */
            public events: eventstore.proto.ResolvedEvent$Properties[];

            /**
             * ReadAllEventsCompleted nextCommitPosition.
             * @type {number|Long}
             */
            public nextCommitPosition: (number|Long);

            /**
             * ReadAllEventsCompleted nextPreparePosition.
             * @type {number|Long}
             */
            public nextPreparePosition: (number|Long);

            /**
             * ReadAllEventsCompleted result.
             * @type {eventstore.proto.ReadAllEventsCompleted.ReadAllResult}
             */
            public result: eventstore.proto.ReadAllEventsCompleted.ReadAllResult;

            /**
             * ReadAllEventsCompleted error.
             * @type {string}
             */
            public error: string;

            /**
             * Creates a new ReadAllEventsCompleted instance using the specified properties.
             * @param {eventstore.proto.ReadAllEventsCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted instance
             */
            public static create(properties?: eventstore.proto.ReadAllEventsCompleted$Properties): eventstore.proto.ReadAllEventsCompleted;

            /**
             * Encodes the specified ReadAllEventsCompleted message. Does not implicitly {@link eventstore.proto.ReadAllEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadAllEventsCompleted$Properties} message ReadAllEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ReadAllEventsCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadAllEventsCompleted message, length delimited. Does not implicitly {@link eventstore.proto.ReadAllEventsCompleted.verify|verify} messages.
             * @param {eventstore.proto.ReadAllEventsCompleted$Properties} message ReadAllEventsCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ReadAllEventsCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadAllEventsCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ReadAllEventsCompleted;

            /**
             * Decodes a ReadAllEventsCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ReadAllEventsCompleted;

            /**
             * Verifies a ReadAllEventsCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ReadAllEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ReadAllEventsCompleted;

            /**
             * Creates a ReadAllEventsCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ReadAllEventsCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ReadAllEventsCompleted} ReadAllEventsCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ReadAllEventsCompleted;

            /**
             * Creates a plain object from a ReadAllEventsCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.ReadAllEventsCompleted} message ReadAllEventsCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ReadAllEventsCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ReadAllEventsCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadAllEventsCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ReadAllEventsCompleted {

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
            enum ReadAllResult {
                Success = 0,
                NotModified = 1,
                Error = 2,
                AccessDenied = 3
            }
        }

        type CreatePersistentSubscription$Properties = {
            subscriptionGroupName: string;
            eventStreamId: string;
            resolveLinkTos: boolean;
            startFrom: number;
            messageTimeoutMilliseconds: number;
            recordStatistics: boolean;
            liveBufferSize: number;
            readBatchSize: number;
            bufferSize: number;
            maxRetryCount: number;
            preferRoundRobin: boolean;
            checkpointAfterTime: number;
            checkpointMaxCount: number;
            checkpointMinCount: number;
            subscriberMaxCount: number;
            namedConsumerStrategy?: string;
        };

        /**
         * Constructs a new CreatePersistentSubscription.
         * @exports eventstore.proto.CreatePersistentSubscription
         * @constructor
         * @param {eventstore.proto.CreatePersistentSubscription$Properties=} [properties] Properties to set
         */
        class CreatePersistentSubscription {

            /**
             * Constructs a new CreatePersistentSubscription.
             * @exports eventstore.proto.CreatePersistentSubscription
             * @constructor
             * @param {eventstore.proto.CreatePersistentSubscription$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.CreatePersistentSubscription$Properties);

            /**
             * CreatePersistentSubscription subscriptionGroupName.
             * @type {string}
             */
            public subscriptionGroupName: string;

            /**
             * CreatePersistentSubscription eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * CreatePersistentSubscription resolveLinkTos.
             * @type {boolean}
             */
            public resolveLinkTos: boolean;

            /**
             * CreatePersistentSubscription startFrom.
             * @type {number}
             */
            public startFrom: number;

            /**
             * CreatePersistentSubscription messageTimeoutMilliseconds.
             * @type {number}
             */
            public messageTimeoutMilliseconds: number;

            /**
             * CreatePersistentSubscription recordStatistics.
             * @type {boolean}
             */
            public recordStatistics: boolean;

            /**
             * CreatePersistentSubscription liveBufferSize.
             * @type {number}
             */
            public liveBufferSize: number;

            /**
             * CreatePersistentSubscription readBatchSize.
             * @type {number}
             */
            public readBatchSize: number;

            /**
             * CreatePersistentSubscription bufferSize.
             * @type {number}
             */
            public bufferSize: number;

            /**
             * CreatePersistentSubscription maxRetryCount.
             * @type {number}
             */
            public maxRetryCount: number;

            /**
             * CreatePersistentSubscription preferRoundRobin.
             * @type {boolean}
             */
            public preferRoundRobin: boolean;

            /**
             * CreatePersistentSubscription checkpointAfterTime.
             * @type {number}
             */
            public checkpointAfterTime: number;

            /**
             * CreatePersistentSubscription checkpointMaxCount.
             * @type {number}
             */
            public checkpointMaxCount: number;

            /**
             * CreatePersistentSubscription checkpointMinCount.
             * @type {number}
             */
            public checkpointMinCount: number;

            /**
             * CreatePersistentSubscription subscriberMaxCount.
             * @type {number}
             */
            public subscriberMaxCount: number;

            /**
             * CreatePersistentSubscription namedConsumerStrategy.
             * @type {string}
             */
            public namedConsumerStrategy: string;

            /**
             * Creates a new CreatePersistentSubscription instance using the specified properties.
             * @param {eventstore.proto.CreatePersistentSubscription$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription instance
             */
            public static create(properties?: eventstore.proto.CreatePersistentSubscription$Properties): eventstore.proto.CreatePersistentSubscription;

            /**
             * Encodes the specified CreatePersistentSubscription message. Does not implicitly {@link eventstore.proto.CreatePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.CreatePersistentSubscription$Properties} message CreatePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.CreatePersistentSubscription$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreatePersistentSubscription message, length delimited. Does not implicitly {@link eventstore.proto.CreatePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.CreatePersistentSubscription$Properties} message CreatePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.CreatePersistentSubscription$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreatePersistentSubscription message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.CreatePersistentSubscription;

            /**
             * Decodes a CreatePersistentSubscription message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.CreatePersistentSubscription;

            /**
             * Verifies a CreatePersistentSubscription message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a CreatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.CreatePersistentSubscription;

            /**
             * Creates a CreatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.CreatePersistentSubscription.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.CreatePersistentSubscription} CreatePersistentSubscription
             */
            public static from(object: { [k: string]: any }): eventstore.proto.CreatePersistentSubscription;

            /**
             * Creates a plain object from a CreatePersistentSubscription message. Also converts values to other types if specified.
             * @param {eventstore.proto.CreatePersistentSubscription} message CreatePersistentSubscription
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.CreatePersistentSubscription, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this CreatePersistentSubscription message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this CreatePersistentSubscription to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type DeletePersistentSubscription$Properties = {
            subscriptionGroupName: string;
            eventStreamId: string;
        };

        /**
         * Constructs a new DeletePersistentSubscription.
         * @exports eventstore.proto.DeletePersistentSubscription
         * @constructor
         * @param {eventstore.proto.DeletePersistentSubscription$Properties=} [properties] Properties to set
         */
        class DeletePersistentSubscription {

            /**
             * Constructs a new DeletePersistentSubscription.
             * @exports eventstore.proto.DeletePersistentSubscription
             * @constructor
             * @param {eventstore.proto.DeletePersistentSubscription$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.DeletePersistentSubscription$Properties);

            /**
             * DeletePersistentSubscription subscriptionGroupName.
             * @type {string}
             */
            public subscriptionGroupName: string;

            /**
             * DeletePersistentSubscription eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * Creates a new DeletePersistentSubscription instance using the specified properties.
             * @param {eventstore.proto.DeletePersistentSubscription$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription instance
             */
            public static create(properties?: eventstore.proto.DeletePersistentSubscription$Properties): eventstore.proto.DeletePersistentSubscription;

            /**
             * Encodes the specified DeletePersistentSubscription message. Does not implicitly {@link eventstore.proto.DeletePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.DeletePersistentSubscription$Properties} message DeletePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.DeletePersistentSubscription$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeletePersistentSubscription message, length delimited. Does not implicitly {@link eventstore.proto.DeletePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.DeletePersistentSubscription$Properties} message DeletePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.DeletePersistentSubscription$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeletePersistentSubscription message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.DeletePersistentSubscription;

            /**
             * Decodes a DeletePersistentSubscription message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.DeletePersistentSubscription;

            /**
             * Verifies a DeletePersistentSubscription message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a DeletePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.DeletePersistentSubscription;

            /**
             * Creates a DeletePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.DeletePersistentSubscription.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeletePersistentSubscription} DeletePersistentSubscription
             */
            public static from(object: { [k: string]: any }): eventstore.proto.DeletePersistentSubscription;

            /**
             * Creates a plain object from a DeletePersistentSubscription message. Also converts values to other types if specified.
             * @param {eventstore.proto.DeletePersistentSubscription} message DeletePersistentSubscription
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.DeletePersistentSubscription, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this DeletePersistentSubscription message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this DeletePersistentSubscription to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type UpdatePersistentSubscription$Properties = {
            subscriptionGroupName: string;
            eventStreamId: string;
            resolveLinkTos: boolean;
            startFrom: number;
            messageTimeoutMilliseconds: number;
            recordStatistics: boolean;
            liveBufferSize: number;
            readBatchSize: number;
            bufferSize: number;
            maxRetryCount: number;
            preferRoundRobin: boolean;
            checkpointAfterTime: number;
            checkpointMaxCount: number;
            checkpointMinCount: number;
            subscriberMaxCount: number;
            namedConsumerStrategy?: string;
        };

        /**
         * Constructs a new UpdatePersistentSubscription.
         * @exports eventstore.proto.UpdatePersistentSubscription
         * @constructor
         * @param {eventstore.proto.UpdatePersistentSubscription$Properties=} [properties] Properties to set
         */
        class UpdatePersistentSubscription {

            /**
             * Constructs a new UpdatePersistentSubscription.
             * @exports eventstore.proto.UpdatePersistentSubscription
             * @constructor
             * @param {eventstore.proto.UpdatePersistentSubscription$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.UpdatePersistentSubscription$Properties);

            /**
             * UpdatePersistentSubscription subscriptionGroupName.
             * @type {string}
             */
            public subscriptionGroupName: string;

            /**
             * UpdatePersistentSubscription eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * UpdatePersistentSubscription resolveLinkTos.
             * @type {boolean}
             */
            public resolveLinkTos: boolean;

            /**
             * UpdatePersistentSubscription startFrom.
             * @type {number}
             */
            public startFrom: number;

            /**
             * UpdatePersistentSubscription messageTimeoutMilliseconds.
             * @type {number}
             */
            public messageTimeoutMilliseconds: number;

            /**
             * UpdatePersistentSubscription recordStatistics.
             * @type {boolean}
             */
            public recordStatistics: boolean;

            /**
             * UpdatePersistentSubscription liveBufferSize.
             * @type {number}
             */
            public liveBufferSize: number;

            /**
             * UpdatePersistentSubscription readBatchSize.
             * @type {number}
             */
            public readBatchSize: number;

            /**
             * UpdatePersistentSubscription bufferSize.
             * @type {number}
             */
            public bufferSize: number;

            /**
             * UpdatePersistentSubscription maxRetryCount.
             * @type {number}
             */
            public maxRetryCount: number;

            /**
             * UpdatePersistentSubscription preferRoundRobin.
             * @type {boolean}
             */
            public preferRoundRobin: boolean;

            /**
             * UpdatePersistentSubscription checkpointAfterTime.
             * @type {number}
             */
            public checkpointAfterTime: number;

            /**
             * UpdatePersistentSubscription checkpointMaxCount.
             * @type {number}
             */
            public checkpointMaxCount: number;

            /**
             * UpdatePersistentSubscription checkpointMinCount.
             * @type {number}
             */
            public checkpointMinCount: number;

            /**
             * UpdatePersistentSubscription subscriberMaxCount.
             * @type {number}
             */
            public subscriberMaxCount: number;

            /**
             * UpdatePersistentSubscription namedConsumerStrategy.
             * @type {string}
             */
            public namedConsumerStrategy: string;

            /**
             * Creates a new UpdatePersistentSubscription instance using the specified properties.
             * @param {eventstore.proto.UpdatePersistentSubscription$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription instance
             */
            public static create(properties?: eventstore.proto.UpdatePersistentSubscription$Properties): eventstore.proto.UpdatePersistentSubscription;

            /**
             * Encodes the specified UpdatePersistentSubscription message. Does not implicitly {@link eventstore.proto.UpdatePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.UpdatePersistentSubscription$Properties} message UpdatePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.UpdatePersistentSubscription$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdatePersistentSubscription message, length delimited. Does not implicitly {@link eventstore.proto.UpdatePersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.UpdatePersistentSubscription$Properties} message UpdatePersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.UpdatePersistentSubscription$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdatePersistentSubscription message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.UpdatePersistentSubscription;

            /**
             * Decodes an UpdatePersistentSubscription message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.UpdatePersistentSubscription;

            /**
             * Verifies an UpdatePersistentSubscription message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates an UpdatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.UpdatePersistentSubscription;

            /**
             * Creates an UpdatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.UpdatePersistentSubscription.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UpdatePersistentSubscription} UpdatePersistentSubscription
             */
            public static from(object: { [k: string]: any }): eventstore.proto.UpdatePersistentSubscription;

            /**
             * Creates a plain object from an UpdatePersistentSubscription message. Also converts values to other types if specified.
             * @param {eventstore.proto.UpdatePersistentSubscription} message UpdatePersistentSubscription
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.UpdatePersistentSubscription, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this UpdatePersistentSubscription message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdatePersistentSubscription to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type UpdatePersistentSubscriptionCompleted$Properties = {
            result: eventstore.proto.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult;
            reason?: string;
        };

        /**
         * Constructs a new UpdatePersistentSubscriptionCompleted.
         * @exports eventstore.proto.UpdatePersistentSubscriptionCompleted
         * @constructor
         * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
         */
        class UpdatePersistentSubscriptionCompleted {

            /**
             * Constructs a new UpdatePersistentSubscriptionCompleted.
             * @exports eventstore.proto.UpdatePersistentSubscriptionCompleted
             * @constructor
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties);

            /**
             * UpdatePersistentSubscriptionCompleted result.
             * @type {eventstore.proto.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult}
             */
            public result: eventstore.proto.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult;

            /**
             * UpdatePersistentSubscriptionCompleted reason.
             * @type {string}
             */
            public reason: string;

            /**
             * Creates a new UpdatePersistentSubscriptionCompleted instance using the specified properties.
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted instance
             */
            public static create(properties?: eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties): eventstore.proto.UpdatePersistentSubscriptionCompleted;

            /**
             * Encodes the specified UpdatePersistentSubscriptionCompleted message. Does not implicitly {@link eventstore.proto.UpdatePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties} message UpdatePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdatePersistentSubscriptionCompleted message, length delimited. Does not implicitly {@link eventstore.proto.UpdatePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties} message UpdatePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.UpdatePersistentSubscriptionCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdatePersistentSubscriptionCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.UpdatePersistentSubscriptionCompleted;

            /**
             * Decodes an UpdatePersistentSubscriptionCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.UpdatePersistentSubscriptionCompleted;

            /**
             * Verifies an UpdatePersistentSubscriptionCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates an UpdatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.UpdatePersistentSubscriptionCompleted;

            /**
             * Creates an UpdatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.UpdatePersistentSubscriptionCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.UpdatePersistentSubscriptionCompleted;

            /**
             * Creates a plain object from an UpdatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.UpdatePersistentSubscriptionCompleted} message UpdatePersistentSubscriptionCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.UpdatePersistentSubscriptionCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this UpdatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdatePersistentSubscriptionCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UpdatePersistentSubscriptionCompleted {

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
            enum UpdatePersistentSubscriptionResult {
                Success = 0,
                DoesNotExist = 1,
                Fail = 2,
                AccessDenied = 3
            }
        }

        type CreatePersistentSubscriptionCompleted$Properties = {
            result: eventstore.proto.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult;
            reason?: string;
        };

        /**
         * Constructs a new CreatePersistentSubscriptionCompleted.
         * @exports eventstore.proto.CreatePersistentSubscriptionCompleted
         * @constructor
         * @param {eventstore.proto.CreatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
         */
        class CreatePersistentSubscriptionCompleted {

            /**
             * Constructs a new CreatePersistentSubscriptionCompleted.
             * @exports eventstore.proto.CreatePersistentSubscriptionCompleted
             * @constructor
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.CreatePersistentSubscriptionCompleted$Properties);

            /**
             * CreatePersistentSubscriptionCompleted result.
             * @type {eventstore.proto.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult}
             */
            public result: eventstore.proto.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult;

            /**
             * CreatePersistentSubscriptionCompleted reason.
             * @type {string}
             */
            public reason: string;

            /**
             * Creates a new CreatePersistentSubscriptionCompleted instance using the specified properties.
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted instance
             */
            public static create(properties?: eventstore.proto.CreatePersistentSubscriptionCompleted$Properties): eventstore.proto.CreatePersistentSubscriptionCompleted;

            /**
             * Encodes the specified CreatePersistentSubscriptionCompleted message. Does not implicitly {@link eventstore.proto.CreatePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted$Properties} message CreatePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.CreatePersistentSubscriptionCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreatePersistentSubscriptionCompleted message, length delimited. Does not implicitly {@link eventstore.proto.CreatePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted$Properties} message CreatePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.CreatePersistentSubscriptionCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreatePersistentSubscriptionCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.CreatePersistentSubscriptionCompleted;

            /**
             * Decodes a CreatePersistentSubscriptionCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.CreatePersistentSubscriptionCompleted;

            /**
             * Verifies a CreatePersistentSubscriptionCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a CreatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.CreatePersistentSubscriptionCompleted;

            /**
             * Creates a CreatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.CreatePersistentSubscriptionCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.CreatePersistentSubscriptionCompleted;

            /**
             * Creates a plain object from a CreatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.CreatePersistentSubscriptionCompleted} message CreatePersistentSubscriptionCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.CreatePersistentSubscriptionCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this CreatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this CreatePersistentSubscriptionCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CreatePersistentSubscriptionCompleted {

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
            enum CreatePersistentSubscriptionResult {
                Success = 0,
                AlreadyExists = 1,
                Fail = 2,
                AccessDenied = 3
            }
        }

        type DeletePersistentSubscriptionCompleted$Properties = {
            result: eventstore.proto.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult;
            reason?: string;
        };

        /**
         * Constructs a new DeletePersistentSubscriptionCompleted.
         * @exports eventstore.proto.DeletePersistentSubscriptionCompleted
         * @constructor
         * @param {eventstore.proto.DeletePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
         */
        class DeletePersistentSubscriptionCompleted {

            /**
             * Constructs a new DeletePersistentSubscriptionCompleted.
             * @exports eventstore.proto.DeletePersistentSubscriptionCompleted
             * @constructor
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.DeletePersistentSubscriptionCompleted$Properties);

            /**
             * DeletePersistentSubscriptionCompleted result.
             * @type {eventstore.proto.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult}
             */
            public result: eventstore.proto.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult;

            /**
             * DeletePersistentSubscriptionCompleted reason.
             * @type {string}
             */
            public reason: string;

            /**
             * Creates a new DeletePersistentSubscriptionCompleted instance using the specified properties.
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted instance
             */
            public static create(properties?: eventstore.proto.DeletePersistentSubscriptionCompleted$Properties): eventstore.proto.DeletePersistentSubscriptionCompleted;

            /**
             * Encodes the specified DeletePersistentSubscriptionCompleted message. Does not implicitly {@link eventstore.proto.DeletePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted$Properties} message DeletePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.DeletePersistentSubscriptionCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeletePersistentSubscriptionCompleted message, length delimited. Does not implicitly {@link eventstore.proto.DeletePersistentSubscriptionCompleted.verify|verify} messages.
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted$Properties} message DeletePersistentSubscriptionCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.DeletePersistentSubscriptionCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeletePersistentSubscriptionCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.DeletePersistentSubscriptionCompleted;

            /**
             * Decodes a DeletePersistentSubscriptionCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.DeletePersistentSubscriptionCompleted;

            /**
             * Verifies a DeletePersistentSubscriptionCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a DeletePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.DeletePersistentSubscriptionCompleted;

            /**
             * Creates a DeletePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.DeletePersistentSubscriptionCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.DeletePersistentSubscriptionCompleted;

            /**
             * Creates a plain object from a DeletePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.DeletePersistentSubscriptionCompleted} message DeletePersistentSubscriptionCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.DeletePersistentSubscriptionCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this DeletePersistentSubscriptionCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this DeletePersistentSubscriptionCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DeletePersistentSubscriptionCompleted {

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
            enum DeletePersistentSubscriptionResult {
                Success = 0,
                DoesNotExist = 1,
                Fail = 2,
                AccessDenied = 3
            }
        }

        type ConnectToPersistentSubscription$Properties = {
            subscriptionId: string;
            eventStreamId: string;
            allowedInFlightMessages: number;
        };

        /**
         * Constructs a new ConnectToPersistentSubscription.
         * @exports eventstore.proto.ConnectToPersistentSubscription
         * @constructor
         * @param {eventstore.proto.ConnectToPersistentSubscription$Properties=} [properties] Properties to set
         */
        class ConnectToPersistentSubscription {

            /**
             * Constructs a new ConnectToPersistentSubscription.
             * @exports eventstore.proto.ConnectToPersistentSubscription
             * @constructor
             * @param {eventstore.proto.ConnectToPersistentSubscription$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ConnectToPersistentSubscription$Properties);

            /**
             * ConnectToPersistentSubscription subscriptionId.
             * @type {string}
             */
            public subscriptionId: string;

            /**
             * ConnectToPersistentSubscription eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * ConnectToPersistentSubscription allowedInFlightMessages.
             * @type {number}
             */
            public allowedInFlightMessages: number;

            /**
             * Creates a new ConnectToPersistentSubscription instance using the specified properties.
             * @param {eventstore.proto.ConnectToPersistentSubscription$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription instance
             */
            public static create(properties?: eventstore.proto.ConnectToPersistentSubscription$Properties): eventstore.proto.ConnectToPersistentSubscription;

            /**
             * Encodes the specified ConnectToPersistentSubscription message. Does not implicitly {@link eventstore.proto.ConnectToPersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.ConnectToPersistentSubscription$Properties} message ConnectToPersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ConnectToPersistentSubscription$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConnectToPersistentSubscription message, length delimited. Does not implicitly {@link eventstore.proto.ConnectToPersistentSubscription.verify|verify} messages.
             * @param {eventstore.proto.ConnectToPersistentSubscription$Properties} message ConnectToPersistentSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ConnectToPersistentSubscription$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConnectToPersistentSubscription message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ConnectToPersistentSubscription;

            /**
             * Decodes a ConnectToPersistentSubscription message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ConnectToPersistentSubscription;

            /**
             * Verifies a ConnectToPersistentSubscription message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ConnectToPersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ConnectToPersistentSubscription;

            /**
             * Creates a ConnectToPersistentSubscription message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ConnectToPersistentSubscription.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ConnectToPersistentSubscription} ConnectToPersistentSubscription
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ConnectToPersistentSubscription;

            /**
             * Creates a plain object from a ConnectToPersistentSubscription message. Also converts values to other types if specified.
             * @param {eventstore.proto.ConnectToPersistentSubscription} message ConnectToPersistentSubscription
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ConnectToPersistentSubscription, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ConnectToPersistentSubscription message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ConnectToPersistentSubscription to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type PersistentSubscriptionAckEvents$Properties = {
            subscriptionId: string;
            processedEventIds?: Uint8Array[];
        };

        /**
         * Constructs a new PersistentSubscriptionAckEvents.
         * @exports eventstore.proto.PersistentSubscriptionAckEvents
         * @constructor
         * @param {eventstore.proto.PersistentSubscriptionAckEvents$Properties=} [properties] Properties to set
         */
        class PersistentSubscriptionAckEvents {

            /**
             * Constructs a new PersistentSubscriptionAckEvents.
             * @exports eventstore.proto.PersistentSubscriptionAckEvents
             * @constructor
             * @param {eventstore.proto.PersistentSubscriptionAckEvents$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.PersistentSubscriptionAckEvents$Properties);

            /**
             * PersistentSubscriptionAckEvents subscriptionId.
             * @type {string}
             */
            public subscriptionId: string;

            /**
             * PersistentSubscriptionAckEvents processedEventIds.
             * @type {Array.<Uint8Array>}
             */
            public processedEventIds: Uint8Array[];

            /**
             * Creates a new PersistentSubscriptionAckEvents instance using the specified properties.
             * @param {eventstore.proto.PersistentSubscriptionAckEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents instance
             */
            public static create(properties?: eventstore.proto.PersistentSubscriptionAckEvents$Properties): eventstore.proto.PersistentSubscriptionAckEvents;

            /**
             * Encodes the specified PersistentSubscriptionAckEvents message. Does not implicitly {@link eventstore.proto.PersistentSubscriptionAckEvents.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionAckEvents$Properties} message PersistentSubscriptionAckEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.PersistentSubscriptionAckEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PersistentSubscriptionAckEvents message, length delimited. Does not implicitly {@link eventstore.proto.PersistentSubscriptionAckEvents.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionAckEvents$Properties} message PersistentSubscriptionAckEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.PersistentSubscriptionAckEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PersistentSubscriptionAckEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.PersistentSubscriptionAckEvents;

            /**
             * Decodes a PersistentSubscriptionAckEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.PersistentSubscriptionAckEvents;

            /**
             * Verifies a PersistentSubscriptionAckEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a PersistentSubscriptionAckEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.PersistentSubscriptionAckEvents;

            /**
             * Creates a PersistentSubscriptionAckEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.PersistentSubscriptionAckEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
             */
            public static from(object: { [k: string]: any }): eventstore.proto.PersistentSubscriptionAckEvents;

            /**
             * Creates a plain object from a PersistentSubscriptionAckEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.PersistentSubscriptionAckEvents} message PersistentSubscriptionAckEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.PersistentSubscriptionAckEvents, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this PersistentSubscriptionAckEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this PersistentSubscriptionAckEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type PersistentSubscriptionNakEvents$Properties = {
            subscriptionId: string;
            processedEventIds?: Uint8Array[];
            message?: string;
            action: eventstore.proto.PersistentSubscriptionNakEvents.NakAction;
        };

        /**
         * Constructs a new PersistentSubscriptionNakEvents.
         * @exports eventstore.proto.PersistentSubscriptionNakEvents
         * @constructor
         * @param {eventstore.proto.PersistentSubscriptionNakEvents$Properties=} [properties] Properties to set
         */
        class PersistentSubscriptionNakEvents {

            /**
             * Constructs a new PersistentSubscriptionNakEvents.
             * @exports eventstore.proto.PersistentSubscriptionNakEvents
             * @constructor
             * @param {eventstore.proto.PersistentSubscriptionNakEvents$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.PersistentSubscriptionNakEvents$Properties);

            /**
             * PersistentSubscriptionNakEvents subscriptionId.
             * @type {string}
             */
            public subscriptionId: string;

            /**
             * PersistentSubscriptionNakEvents processedEventIds.
             * @type {Array.<Uint8Array>}
             */
            public processedEventIds: Uint8Array[];

            /**
             * PersistentSubscriptionNakEvents message.
             * @type {string}
             */
            public message: string;

            /**
             * PersistentSubscriptionNakEvents action.
             * @type {eventstore.proto.PersistentSubscriptionNakEvents.NakAction}
             */
            public action: eventstore.proto.PersistentSubscriptionNakEvents.NakAction;

            /**
             * Creates a new PersistentSubscriptionNakEvents instance using the specified properties.
             * @param {eventstore.proto.PersistentSubscriptionNakEvents$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents instance
             */
            public static create(properties?: eventstore.proto.PersistentSubscriptionNakEvents$Properties): eventstore.proto.PersistentSubscriptionNakEvents;

            /**
             * Encodes the specified PersistentSubscriptionNakEvents message. Does not implicitly {@link eventstore.proto.PersistentSubscriptionNakEvents.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionNakEvents$Properties} message PersistentSubscriptionNakEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.PersistentSubscriptionNakEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PersistentSubscriptionNakEvents message, length delimited. Does not implicitly {@link eventstore.proto.PersistentSubscriptionNakEvents.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionNakEvents$Properties} message PersistentSubscriptionNakEvents message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.PersistentSubscriptionNakEvents$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PersistentSubscriptionNakEvents message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.PersistentSubscriptionNakEvents;

            /**
             * Decodes a PersistentSubscriptionNakEvents message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.PersistentSubscriptionNakEvents;

            /**
             * Verifies a PersistentSubscriptionNakEvents message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a PersistentSubscriptionNakEvents message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.PersistentSubscriptionNakEvents;

            /**
             * Creates a PersistentSubscriptionNakEvents message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.PersistentSubscriptionNakEvents.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
             */
            public static from(object: { [k: string]: any }): eventstore.proto.PersistentSubscriptionNakEvents;

            /**
             * Creates a plain object from a PersistentSubscriptionNakEvents message. Also converts values to other types if specified.
             * @param {eventstore.proto.PersistentSubscriptionNakEvents} message PersistentSubscriptionNakEvents
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.PersistentSubscriptionNakEvents, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this PersistentSubscriptionNakEvents message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this PersistentSubscriptionNakEvents to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace PersistentSubscriptionNakEvents {

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
            enum NakAction {
                Unknown = 0,
                Park = 1,
                Retry = 2,
                Skip = 3,
                Stop = 4
            }
        }

        type PersistentSubscriptionConfirmation$Properties = {
            lastCommitPosition: (number|Long);
            subscriptionId: string;
            lastEventNumber?: number;
        };

        /**
         * Constructs a new PersistentSubscriptionConfirmation.
         * @exports eventstore.proto.PersistentSubscriptionConfirmation
         * @constructor
         * @param {eventstore.proto.PersistentSubscriptionConfirmation$Properties=} [properties] Properties to set
         */
        class PersistentSubscriptionConfirmation {

            /**
             * Constructs a new PersistentSubscriptionConfirmation.
             * @exports eventstore.proto.PersistentSubscriptionConfirmation
             * @constructor
             * @param {eventstore.proto.PersistentSubscriptionConfirmation$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.PersistentSubscriptionConfirmation$Properties);

            /**
             * PersistentSubscriptionConfirmation lastCommitPosition.
             * @type {number|Long}
             */
            public lastCommitPosition: (number|Long);

            /**
             * PersistentSubscriptionConfirmation subscriptionId.
             * @type {string}
             */
            public subscriptionId: string;

            /**
             * PersistentSubscriptionConfirmation lastEventNumber.
             * @type {number}
             */
            public lastEventNumber: number;

            /**
             * Creates a new PersistentSubscriptionConfirmation instance using the specified properties.
             * @param {eventstore.proto.PersistentSubscriptionConfirmation$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation instance
             */
            public static create(properties?: eventstore.proto.PersistentSubscriptionConfirmation$Properties): eventstore.proto.PersistentSubscriptionConfirmation;

            /**
             * Encodes the specified PersistentSubscriptionConfirmation message. Does not implicitly {@link eventstore.proto.PersistentSubscriptionConfirmation.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionConfirmation$Properties} message PersistentSubscriptionConfirmation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.PersistentSubscriptionConfirmation$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PersistentSubscriptionConfirmation message, length delimited. Does not implicitly {@link eventstore.proto.PersistentSubscriptionConfirmation.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionConfirmation$Properties} message PersistentSubscriptionConfirmation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.PersistentSubscriptionConfirmation$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PersistentSubscriptionConfirmation message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.PersistentSubscriptionConfirmation;

            /**
             * Decodes a PersistentSubscriptionConfirmation message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.PersistentSubscriptionConfirmation;

            /**
             * Verifies a PersistentSubscriptionConfirmation message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a PersistentSubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.PersistentSubscriptionConfirmation;

            /**
             * Creates a PersistentSubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.PersistentSubscriptionConfirmation.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
             */
            public static from(object: { [k: string]: any }): eventstore.proto.PersistentSubscriptionConfirmation;

            /**
             * Creates a plain object from a PersistentSubscriptionConfirmation message. Also converts values to other types if specified.
             * @param {eventstore.proto.PersistentSubscriptionConfirmation} message PersistentSubscriptionConfirmation
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.PersistentSubscriptionConfirmation, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this PersistentSubscriptionConfirmation message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this PersistentSubscriptionConfirmation to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type PersistentSubscriptionStreamEventAppeared$Properties = {
            event: eventstore.proto.ResolvedIndexedEvent$Properties;
        };

        /**
         * Constructs a new PersistentSubscriptionStreamEventAppeared.
         * @exports eventstore.proto.PersistentSubscriptionStreamEventAppeared
         * @constructor
         * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties=} [properties] Properties to set
         */
        class PersistentSubscriptionStreamEventAppeared {

            /**
             * Constructs a new PersistentSubscriptionStreamEventAppeared.
             * @exports eventstore.proto.PersistentSubscriptionStreamEventAppeared
             * @constructor
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties);

            /**
             * PersistentSubscriptionStreamEventAppeared event.
             * @type {eventstore.proto.ResolvedIndexedEvent$Properties}
             */
            public event: eventstore.proto.ResolvedIndexedEvent$Properties;

            /**
             * Creates a new PersistentSubscriptionStreamEventAppeared instance using the specified properties.
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared instance
             */
            public static create(properties?: eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties): eventstore.proto.PersistentSubscriptionStreamEventAppeared;

            /**
             * Encodes the specified PersistentSubscriptionStreamEventAppeared message. Does not implicitly {@link eventstore.proto.PersistentSubscriptionStreamEventAppeared.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties} message PersistentSubscriptionStreamEventAppeared message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PersistentSubscriptionStreamEventAppeared message, length delimited. Does not implicitly {@link eventstore.proto.PersistentSubscriptionStreamEventAppeared.verify|verify} messages.
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties} message PersistentSubscriptionStreamEventAppeared message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.PersistentSubscriptionStreamEventAppeared$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PersistentSubscriptionStreamEventAppeared message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.PersistentSubscriptionStreamEventAppeared;

            /**
             * Decodes a PersistentSubscriptionStreamEventAppeared message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.PersistentSubscriptionStreamEventAppeared;

            /**
             * Verifies a PersistentSubscriptionStreamEventAppeared message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a PersistentSubscriptionStreamEventAppeared message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.PersistentSubscriptionStreamEventAppeared;

            /**
             * Creates a PersistentSubscriptionStreamEventAppeared message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.PersistentSubscriptionStreamEventAppeared.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
             */
            public static from(object: { [k: string]: any }): eventstore.proto.PersistentSubscriptionStreamEventAppeared;

            /**
             * Creates a plain object from a PersistentSubscriptionStreamEventAppeared message. Also converts values to other types if specified.
             * @param {eventstore.proto.PersistentSubscriptionStreamEventAppeared} message PersistentSubscriptionStreamEventAppeared
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.PersistentSubscriptionStreamEventAppeared, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this PersistentSubscriptionStreamEventAppeared message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this PersistentSubscriptionStreamEventAppeared to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type SubscribeToStream$Properties = {
            eventStreamId: string;
            resolveLinkTos: boolean;
        };

        /**
         * Constructs a new SubscribeToStream.
         * @exports eventstore.proto.SubscribeToStream
         * @constructor
         * @param {eventstore.proto.SubscribeToStream$Properties=} [properties] Properties to set
         */
        class SubscribeToStream {

            /**
             * Constructs a new SubscribeToStream.
             * @exports eventstore.proto.SubscribeToStream
             * @constructor
             * @param {eventstore.proto.SubscribeToStream$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.SubscribeToStream$Properties);

            /**
             * SubscribeToStream eventStreamId.
             * @type {string}
             */
            public eventStreamId: string;

            /**
             * SubscribeToStream resolveLinkTos.
             * @type {boolean}
             */
            public resolveLinkTos: boolean;

            /**
             * Creates a new SubscribeToStream instance using the specified properties.
             * @param {eventstore.proto.SubscribeToStream$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream instance
             */
            public static create(properties?: eventstore.proto.SubscribeToStream$Properties): eventstore.proto.SubscribeToStream;

            /**
             * Encodes the specified SubscribeToStream message. Does not implicitly {@link eventstore.proto.SubscribeToStream.verify|verify} messages.
             * @param {eventstore.proto.SubscribeToStream$Properties} message SubscribeToStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.SubscribeToStream$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubscribeToStream message, length delimited. Does not implicitly {@link eventstore.proto.SubscribeToStream.verify|verify} messages.
             * @param {eventstore.proto.SubscribeToStream$Properties} message SubscribeToStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.SubscribeToStream$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubscribeToStream message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.SubscribeToStream;

            /**
             * Decodes a SubscribeToStream message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.SubscribeToStream;

            /**
             * Verifies a SubscribeToStream message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a SubscribeToStream message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.SubscribeToStream;

            /**
             * Creates a SubscribeToStream message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.SubscribeToStream.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscribeToStream} SubscribeToStream
             */
            public static from(object: { [k: string]: any }): eventstore.proto.SubscribeToStream;

            /**
             * Creates a plain object from a SubscribeToStream message. Also converts values to other types if specified.
             * @param {eventstore.proto.SubscribeToStream} message SubscribeToStream
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.SubscribeToStream, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this SubscribeToStream message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this SubscribeToStream to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type SubscriptionConfirmation$Properties = {
            lastCommitPosition: (number|Long);
            lastEventNumber?: number;
        };

        /**
         * Constructs a new SubscriptionConfirmation.
         * @exports eventstore.proto.SubscriptionConfirmation
         * @constructor
         * @param {eventstore.proto.SubscriptionConfirmation$Properties=} [properties] Properties to set
         */
        class SubscriptionConfirmation {

            /**
             * Constructs a new SubscriptionConfirmation.
             * @exports eventstore.proto.SubscriptionConfirmation
             * @constructor
             * @param {eventstore.proto.SubscriptionConfirmation$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.SubscriptionConfirmation$Properties);

            /**
             * SubscriptionConfirmation lastCommitPosition.
             * @type {number|Long}
             */
            public lastCommitPosition: (number|Long);

            /**
             * SubscriptionConfirmation lastEventNumber.
             * @type {number}
             */
            public lastEventNumber: number;

            /**
             * Creates a new SubscriptionConfirmation instance using the specified properties.
             * @param {eventstore.proto.SubscriptionConfirmation$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation instance
             */
            public static create(properties?: eventstore.proto.SubscriptionConfirmation$Properties): eventstore.proto.SubscriptionConfirmation;

            /**
             * Encodes the specified SubscriptionConfirmation message. Does not implicitly {@link eventstore.proto.SubscriptionConfirmation.verify|verify} messages.
             * @param {eventstore.proto.SubscriptionConfirmation$Properties} message SubscriptionConfirmation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.SubscriptionConfirmation$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubscriptionConfirmation message, length delimited. Does not implicitly {@link eventstore.proto.SubscriptionConfirmation.verify|verify} messages.
             * @param {eventstore.proto.SubscriptionConfirmation$Properties} message SubscriptionConfirmation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.SubscriptionConfirmation$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubscriptionConfirmation message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.SubscriptionConfirmation;

            /**
             * Decodes a SubscriptionConfirmation message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.SubscriptionConfirmation;

            /**
             * Verifies a SubscriptionConfirmation message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a SubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.SubscriptionConfirmation;

            /**
             * Creates a SubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.SubscriptionConfirmation.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscriptionConfirmation} SubscriptionConfirmation
             */
            public static from(object: { [k: string]: any }): eventstore.proto.SubscriptionConfirmation;

            /**
             * Creates a plain object from a SubscriptionConfirmation message. Also converts values to other types if specified.
             * @param {eventstore.proto.SubscriptionConfirmation} message SubscriptionConfirmation
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.SubscriptionConfirmation, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this SubscriptionConfirmation message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this SubscriptionConfirmation to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type StreamEventAppeared$Properties = {
            event: eventstore.proto.ResolvedEvent$Properties;
        };

        /**
         * Constructs a new StreamEventAppeared.
         * @exports eventstore.proto.StreamEventAppeared
         * @constructor
         * @param {eventstore.proto.StreamEventAppeared$Properties=} [properties] Properties to set
         */
        class StreamEventAppeared {

            /**
             * Constructs a new StreamEventAppeared.
             * @exports eventstore.proto.StreamEventAppeared
             * @constructor
             * @param {eventstore.proto.StreamEventAppeared$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.StreamEventAppeared$Properties);

            /**
             * StreamEventAppeared event.
             * @type {eventstore.proto.ResolvedEvent$Properties}
             */
            public event: eventstore.proto.ResolvedEvent$Properties;

            /**
             * Creates a new StreamEventAppeared instance using the specified properties.
             * @param {eventstore.proto.StreamEventAppeared$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared instance
             */
            public static create(properties?: eventstore.proto.StreamEventAppeared$Properties): eventstore.proto.StreamEventAppeared;

            /**
             * Encodes the specified StreamEventAppeared message. Does not implicitly {@link eventstore.proto.StreamEventAppeared.verify|verify} messages.
             * @param {eventstore.proto.StreamEventAppeared$Properties} message StreamEventAppeared message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.StreamEventAppeared$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StreamEventAppeared message, length delimited. Does not implicitly {@link eventstore.proto.StreamEventAppeared.verify|verify} messages.
             * @param {eventstore.proto.StreamEventAppeared$Properties} message StreamEventAppeared message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.StreamEventAppeared$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StreamEventAppeared message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.StreamEventAppeared;

            /**
             * Decodes a StreamEventAppeared message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.StreamEventAppeared;

            /**
             * Verifies a StreamEventAppeared message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a StreamEventAppeared message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.StreamEventAppeared;

            /**
             * Creates a StreamEventAppeared message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.StreamEventAppeared.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.StreamEventAppeared} StreamEventAppeared
             */
            public static from(object: { [k: string]: any }): eventstore.proto.StreamEventAppeared;

            /**
             * Creates a plain object from a StreamEventAppeared message. Also converts values to other types if specified.
             * @param {eventstore.proto.StreamEventAppeared} message StreamEventAppeared
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.StreamEventAppeared, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this StreamEventAppeared message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this StreamEventAppeared to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type UnsubscribeFromStream$Properties = {};

        /**
         * Constructs a new UnsubscribeFromStream.
         * @exports eventstore.proto.UnsubscribeFromStream
         * @constructor
         * @param {eventstore.proto.UnsubscribeFromStream$Properties=} [properties] Properties to set
         */
        class UnsubscribeFromStream {

            /**
             * Constructs a new UnsubscribeFromStream.
             * @exports eventstore.proto.UnsubscribeFromStream
             * @constructor
             * @param {eventstore.proto.UnsubscribeFromStream$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.UnsubscribeFromStream$Properties);

            /**
             * Creates a new UnsubscribeFromStream instance using the specified properties.
             * @param {eventstore.proto.UnsubscribeFromStream$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream instance
             */
            public static create(properties?: eventstore.proto.UnsubscribeFromStream$Properties): eventstore.proto.UnsubscribeFromStream;

            /**
             * Encodes the specified UnsubscribeFromStream message. Does not implicitly {@link eventstore.proto.UnsubscribeFromStream.verify|verify} messages.
             * @param {eventstore.proto.UnsubscribeFromStream$Properties} message UnsubscribeFromStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.UnsubscribeFromStream$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnsubscribeFromStream message, length delimited. Does not implicitly {@link eventstore.proto.UnsubscribeFromStream.verify|verify} messages.
             * @param {eventstore.proto.UnsubscribeFromStream$Properties} message UnsubscribeFromStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.UnsubscribeFromStream$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnsubscribeFromStream message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.UnsubscribeFromStream;

            /**
             * Decodes an UnsubscribeFromStream message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.UnsubscribeFromStream;

            /**
             * Verifies an UnsubscribeFromStream message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates an UnsubscribeFromStream message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.UnsubscribeFromStream;

            /**
             * Creates an UnsubscribeFromStream message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.UnsubscribeFromStream.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.UnsubscribeFromStream} UnsubscribeFromStream
             */
            public static from(object: { [k: string]: any }): eventstore.proto.UnsubscribeFromStream;

            /**
             * Creates a plain object from an UnsubscribeFromStream message. Also converts values to other types if specified.
             * @param {eventstore.proto.UnsubscribeFromStream} message UnsubscribeFromStream
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.UnsubscribeFromStream, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this UnsubscribeFromStream message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this UnsubscribeFromStream to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type SubscriptionDropped$Properties = {
            reason?: eventstore.proto.SubscriptionDropped.SubscriptionDropReason;
        };

        /**
         * Constructs a new SubscriptionDropped.
         * @exports eventstore.proto.SubscriptionDropped
         * @constructor
         * @param {eventstore.proto.SubscriptionDropped$Properties=} [properties] Properties to set
         */
        class SubscriptionDropped {

            /**
             * Constructs a new SubscriptionDropped.
             * @exports eventstore.proto.SubscriptionDropped
             * @constructor
             * @param {eventstore.proto.SubscriptionDropped$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.SubscriptionDropped$Properties);

            /**
             * SubscriptionDropped reason.
             * @type {eventstore.proto.SubscriptionDropped.SubscriptionDropReason}
             */
            public reason: eventstore.proto.SubscriptionDropped.SubscriptionDropReason;

            /**
             * Creates a new SubscriptionDropped instance using the specified properties.
             * @param {eventstore.proto.SubscriptionDropped$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped instance
             */
            public static create(properties?: eventstore.proto.SubscriptionDropped$Properties): eventstore.proto.SubscriptionDropped;

            /**
             * Encodes the specified SubscriptionDropped message. Does not implicitly {@link eventstore.proto.SubscriptionDropped.verify|verify} messages.
             * @param {eventstore.proto.SubscriptionDropped$Properties} message SubscriptionDropped message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.SubscriptionDropped$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubscriptionDropped message, length delimited. Does not implicitly {@link eventstore.proto.SubscriptionDropped.verify|verify} messages.
             * @param {eventstore.proto.SubscriptionDropped$Properties} message SubscriptionDropped message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.SubscriptionDropped$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubscriptionDropped message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.SubscriptionDropped;

            /**
             * Decodes a SubscriptionDropped message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.SubscriptionDropped;

            /**
             * Verifies a SubscriptionDropped message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a SubscriptionDropped message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.SubscriptionDropped;

            /**
             * Creates a SubscriptionDropped message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.SubscriptionDropped.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.SubscriptionDropped} SubscriptionDropped
             */
            public static from(object: { [k: string]: any }): eventstore.proto.SubscriptionDropped;

            /**
             * Creates a plain object from a SubscriptionDropped message. Also converts values to other types if specified.
             * @param {eventstore.proto.SubscriptionDropped} message SubscriptionDropped
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.SubscriptionDropped, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this SubscriptionDropped message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this SubscriptionDropped to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SubscriptionDropped {

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
            enum SubscriptionDropReason {
                Unsubscribed = 0,
                AccessDenied = 1,
                NotFound = 2,
                PersistentSubscriptionDeleted = 3,
                SubscriberMaxCountReached = 4
            }
        }

        type NotHandled$Properties = {
            reason: eventstore.proto.NotHandled.NotHandledReason;
            additionalInfo?: eventstore.proto.NotHandled.MasterInfo$Properties;
        };

        /**
         * Constructs a new NotHandled.
         * @exports eventstore.proto.NotHandled
         * @constructor
         * @param {eventstore.proto.NotHandled$Properties=} [properties] Properties to set
         */
        class NotHandled {

            /**
             * Constructs a new NotHandled.
             * @exports eventstore.proto.NotHandled
             * @constructor
             * @param {eventstore.proto.NotHandled$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.NotHandled$Properties);

            /**
             * NotHandled reason.
             * @type {eventstore.proto.NotHandled.NotHandledReason}
             */
            public reason: eventstore.proto.NotHandled.NotHandledReason;

            /**
             * NotHandled additionalInfo.
             * @type {(eventstore.proto.NotHandled.MasterInfo$Properties|null)}
             */
            public additionalInfo: (eventstore.proto.NotHandled.MasterInfo$Properties|null);

            /**
             * Creates a new NotHandled instance using the specified properties.
             * @param {eventstore.proto.NotHandled$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.NotHandled} NotHandled instance
             */
            public static create(properties?: eventstore.proto.NotHandled$Properties): eventstore.proto.NotHandled;

            /**
             * Encodes the specified NotHandled message. Does not implicitly {@link eventstore.proto.NotHandled.verify|verify} messages.
             * @param {eventstore.proto.NotHandled$Properties} message NotHandled message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.NotHandled$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotHandled message, length delimited. Does not implicitly {@link eventstore.proto.NotHandled.verify|verify} messages.
             * @param {eventstore.proto.NotHandled$Properties} message NotHandled message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.NotHandled$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotHandled message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.NotHandled} NotHandled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.NotHandled;

            /**
             * Decodes a NotHandled message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.NotHandled} NotHandled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.NotHandled;

            /**
             * Verifies a NotHandled message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a NotHandled message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.NotHandled} NotHandled
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.NotHandled;

            /**
             * Creates a NotHandled message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.NotHandled.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.NotHandled} NotHandled
             */
            public static from(object: { [k: string]: any }): eventstore.proto.NotHandled;

            /**
             * Creates a plain object from a NotHandled message. Also converts values to other types if specified.
             * @param {eventstore.proto.NotHandled} message NotHandled
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.NotHandled, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this NotHandled message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this NotHandled to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace NotHandled {

            /**
             * NotHandledReason enum.
             * @name NotHandledReason
             * @memberof eventstore.proto.NotHandled
             * @enum {number}
             * @property {number} NotReady=0 NotReady value
             * @property {number} TooBusy=1 TooBusy value
             * @property {number} NotMaster=2 NotMaster value
             */
            enum NotHandledReason {
                NotReady = 0,
                TooBusy = 1,
                NotMaster = 2
            }

            type MasterInfo$Properties = {
                externalTcpAddress: string;
                externalTcpPort: number;
                externalHttpAddress: string;
                externalHttpPort: number;
                externalSecureTcpAddress?: string;
                externalSecureTcpPort?: number;
            };

            /**
             * Constructs a new MasterInfo.
             * @exports eventstore.proto.NotHandled.MasterInfo
             * @constructor
             * @param {eventstore.proto.NotHandled.MasterInfo$Properties=} [properties] Properties to set
             */
            class MasterInfo {

                /**
                 * Constructs a new MasterInfo.
                 * @exports eventstore.proto.NotHandled.MasterInfo
                 * @constructor
                 * @param {eventstore.proto.NotHandled.MasterInfo$Properties=} [properties] Properties to set
                 */
                constructor(properties?: eventstore.proto.NotHandled.MasterInfo$Properties);

                /**
                 * MasterInfo externalTcpAddress.
                 * @type {string}
                 */
                public externalTcpAddress: string;

                /**
                 * MasterInfo externalTcpPort.
                 * @type {number}
                 */
                public externalTcpPort: number;

                /**
                 * MasterInfo externalHttpAddress.
                 * @type {string}
                 */
                public externalHttpAddress: string;

                /**
                 * MasterInfo externalHttpPort.
                 * @type {number}
                 */
                public externalHttpPort: number;

                /**
                 * MasterInfo externalSecureTcpAddress.
                 * @type {string}
                 */
                public externalSecureTcpAddress: string;

                /**
                 * MasterInfo externalSecureTcpPort.
                 * @type {number}
                 */
                public externalSecureTcpPort: number;

                /**
                 * Creates a new MasterInfo instance using the specified properties.
                 * @param {eventstore.proto.NotHandled.MasterInfo$Properties=} [properties] Properties to set
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo instance
                 */
                public static create(properties?: eventstore.proto.NotHandled.MasterInfo$Properties): eventstore.proto.NotHandled.MasterInfo;

                /**
                 * Encodes the specified MasterInfo message. Does not implicitly {@link eventstore.proto.NotHandled.MasterInfo.verify|verify} messages.
                 * @param {eventstore.proto.NotHandled.MasterInfo$Properties} message MasterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: eventstore.proto.NotHandled.MasterInfo$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MasterInfo message, length delimited. Does not implicitly {@link eventstore.proto.NotHandled.MasterInfo.verify|verify} messages.
                 * @param {eventstore.proto.NotHandled.MasterInfo$Properties} message MasterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: eventstore.proto.NotHandled.MasterInfo$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MasterInfo message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.NotHandled.MasterInfo;

                /**
                 * Decodes a MasterInfo message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.NotHandled.MasterInfo;

                /**
                 * Verifies a MasterInfo message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a MasterInfo message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo
                 */
                public static fromObject(object: { [k: string]: any }): eventstore.proto.NotHandled.MasterInfo;

                /**
                 * Creates a MasterInfo message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link eventstore.proto.NotHandled.MasterInfo.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {eventstore.proto.NotHandled.MasterInfo} MasterInfo
                 */
                public static from(object: { [k: string]: any }): eventstore.proto.NotHandled.MasterInfo;

                /**
                 * Creates a plain object from a MasterInfo message. Also converts values to other types if specified.
                 * @param {eventstore.proto.NotHandled.MasterInfo} message MasterInfo
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: eventstore.proto.NotHandled.MasterInfo, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this MasterInfo message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this MasterInfo to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        type ScavengeDatabase$Properties = {};

        /**
         * Constructs a new ScavengeDatabase.
         * @exports eventstore.proto.ScavengeDatabase
         * @constructor
         * @param {eventstore.proto.ScavengeDatabase$Properties=} [properties] Properties to set
         */
        class ScavengeDatabase {

            /**
             * Constructs a new ScavengeDatabase.
             * @exports eventstore.proto.ScavengeDatabase
             * @constructor
             * @param {eventstore.proto.ScavengeDatabase$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ScavengeDatabase$Properties);

            /**
             * Creates a new ScavengeDatabase instance using the specified properties.
             * @param {eventstore.proto.ScavengeDatabase$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase instance
             */
            public static create(properties?: eventstore.proto.ScavengeDatabase$Properties): eventstore.proto.ScavengeDatabase;

            /**
             * Encodes the specified ScavengeDatabase message. Does not implicitly {@link eventstore.proto.ScavengeDatabase.verify|verify} messages.
             * @param {eventstore.proto.ScavengeDatabase$Properties} message ScavengeDatabase message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ScavengeDatabase$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScavengeDatabase message, length delimited. Does not implicitly {@link eventstore.proto.ScavengeDatabase.verify|verify} messages.
             * @param {eventstore.proto.ScavengeDatabase$Properties} message ScavengeDatabase message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ScavengeDatabase$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScavengeDatabase message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ScavengeDatabase;

            /**
             * Decodes a ScavengeDatabase message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ScavengeDatabase;

            /**
             * Verifies a ScavengeDatabase message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ScavengeDatabase message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ScavengeDatabase;

            /**
             * Creates a ScavengeDatabase message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ScavengeDatabase.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ScavengeDatabase} ScavengeDatabase
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ScavengeDatabase;

            /**
             * Creates a plain object from a ScavengeDatabase message. Also converts values to other types if specified.
             * @param {eventstore.proto.ScavengeDatabase} message ScavengeDatabase
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ScavengeDatabase, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ScavengeDatabase message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ScavengeDatabase to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        type ScavengeDatabaseCompleted$Properties = {
            result: eventstore.proto.ScavengeDatabaseCompleted.ScavengeResult;
            error?: string;
            totalTimeMs: number;
            totalSpaceSaved: (number|Long);
        };

        /**
         * Constructs a new ScavengeDatabaseCompleted.
         * @exports eventstore.proto.ScavengeDatabaseCompleted
         * @constructor
         * @param {eventstore.proto.ScavengeDatabaseCompleted$Properties=} [properties] Properties to set
         */
        class ScavengeDatabaseCompleted {

            /**
             * Constructs a new ScavengeDatabaseCompleted.
             * @exports eventstore.proto.ScavengeDatabaseCompleted
             * @constructor
             * @param {eventstore.proto.ScavengeDatabaseCompleted$Properties=} [properties] Properties to set
             */
            constructor(properties?: eventstore.proto.ScavengeDatabaseCompleted$Properties);

            /**
             * ScavengeDatabaseCompleted result.
             * @type {eventstore.proto.ScavengeDatabaseCompleted.ScavengeResult}
             */
            public result: eventstore.proto.ScavengeDatabaseCompleted.ScavengeResult;

            /**
             * ScavengeDatabaseCompleted error.
             * @type {string}
             */
            public error: string;

            /**
             * ScavengeDatabaseCompleted totalTimeMs.
             * @type {number}
             */
            public totalTimeMs: number;

            /**
             * ScavengeDatabaseCompleted totalSpaceSaved.
             * @type {number|Long}
             */
            public totalSpaceSaved: (number|Long);

            /**
             * Creates a new ScavengeDatabaseCompleted instance using the specified properties.
             * @param {eventstore.proto.ScavengeDatabaseCompleted$Properties=} [properties] Properties to set
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted instance
             */
            public static create(properties?: eventstore.proto.ScavengeDatabaseCompleted$Properties): eventstore.proto.ScavengeDatabaseCompleted;

            /**
             * Encodes the specified ScavengeDatabaseCompleted message. Does not implicitly {@link eventstore.proto.ScavengeDatabaseCompleted.verify|verify} messages.
             * @param {eventstore.proto.ScavengeDatabaseCompleted$Properties} message ScavengeDatabaseCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encode(message: eventstore.proto.ScavengeDatabaseCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScavengeDatabaseCompleted message, length delimited. Does not implicitly {@link eventstore.proto.ScavengeDatabaseCompleted.verify|verify} messages.
             * @param {eventstore.proto.ScavengeDatabaseCompleted$Properties} message ScavengeDatabaseCompleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            public static encodeDelimited(message: eventstore.proto.ScavengeDatabaseCompleted$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScavengeDatabaseCompleted message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): eventstore.proto.ScavengeDatabaseCompleted;

            /**
             * Decodes a ScavengeDatabaseCompleted message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): eventstore.proto.ScavengeDatabaseCompleted;

            /**
             * Verifies a ScavengeDatabaseCompleted message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string;

            /**
             * Creates a ScavengeDatabaseCompleted message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
             */
            public static fromObject(object: { [k: string]: any }): eventstore.proto.ScavengeDatabaseCompleted;

            /**
             * Creates a ScavengeDatabaseCompleted message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link eventstore.proto.ScavengeDatabaseCompleted.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {eventstore.proto.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
             */
            public static from(object: { [k: string]: any }): eventstore.proto.ScavengeDatabaseCompleted;

            /**
             * Creates a plain object from a ScavengeDatabaseCompleted message. Also converts values to other types if specified.
             * @param {eventstore.proto.ScavengeDatabaseCompleted} message ScavengeDatabaseCompleted
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public static toObject(message: eventstore.proto.ScavengeDatabaseCompleted, options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Creates a plain object from this ScavengeDatabaseCompleted message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

            /**
             * Converts this ScavengeDatabaseCompleted to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ScavengeDatabaseCompleted {

            /**
             * ScavengeResult enum.
             * @name ScavengeResult
             * @memberof eventstore.proto.ScavengeDatabaseCompleted
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} InProgress=1 InProgress value
             * @property {number} Failed=2 Failed value
             */
            enum ScavengeResult {
                Success = 0,
                InProgress = 1,
                Failed = 2
            }
        }
    }
}
