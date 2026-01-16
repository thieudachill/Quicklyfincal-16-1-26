import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock IntersectionObserver
const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// We need a more sophisticated mock that actually invokes the callback
// to simulate "isIntersecting" for our tests to pass.
// Replacing the above simple mock with one that triggers immediately:

const IntersectionObserverMockWithCallback = vi.fn(function (callback, options) {
    return {
        disconnect: vi.fn(),
        observe: vi.fn((element) => {
            // Simulate immediate intersection
            callback([
                {
                    isIntersecting: true,
                    target: element,
                    intersectionRatio: 1,
                    boundingClientRect: element.getBoundingClientRect(),
                    intersectionRect: element.getBoundingClientRect(),
                    rootBounds: null,
                    time: Date.now(),
                },
            ]);
        }),
        takeRecords: vi.fn(),
        unobserve: vi.fn(),
    };
});

vi.stubGlobal('IntersectionObserver', IntersectionObserverMockWithCallback);
