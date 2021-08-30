import moxios from "moxios";

import { fetchPosts } from "../actions";
import { makeMockStore } from "../utils";

describe("fetch posts actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("fetch posts", () => {
    const expectedState = [
      {
        title: "Title 1",
        body: "Body 1",
      },
      {
        title: "Title 2",
        body: "Body 2",
      },
    ];
    const store = makeMockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.postsReducer).toBe(expectedState);
    });
  });
});
