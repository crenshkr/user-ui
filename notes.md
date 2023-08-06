# Redux Life Cycle

1. Event occurs that you want to trigger a state change.

2. Create an `action` to represent the event.

- Actions are abstracted as objects.
- Actions must have `type` and `payload` property.

3. `Dispatch` the action.

4. `Reducer` creates a new state object.

5. State change is reflected throughout application.
