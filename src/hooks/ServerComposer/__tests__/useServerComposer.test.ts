import useServerComposer, {
  UseServerComposerResult,
} from "@hooks/ServerComposer/useServerComposer";
import { act, renderHook } from "@testing-library/react";
import { Cpu } from "defs";
import { maxMemorySize, smallestMemoryMultiple } from "@consts/MemorySize";

describe("useServerComposer", () => {
  it("should set hasSubmit to true when renderTrigger is true", () => {
    const { result } = renderHook<UseServerComposerResult, void>(
      useServerComposer,
    );
    const { setRenderTrigger, hasSubmit } = result.current;

    expect(hasSubmit).toEqual(false);

    act(() => {
      setRenderTrigger(true);
    });

    expect(result.current.hasSubmit).toEqual(true);
  });

  describe("errorState", () => {
    describe("memory", () => {
      it("should be true when less than smallestMemoryMultiple", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(smallestMemoryMultiple - 1);
        });

        expect(result.current.errorState.memory).toEqual(true);
      });

      it("should be true when greater than maxMemorySize", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(maxMemorySize + 1);
        });

        expect(result.current.errorState.memory).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(maxMemorySize - 1);
        });

        expect(result.current.errorState.memory).toEqual(false);
      });
    });
  });

  describe("cpuCondition", () => {
    describe("highDensityServer", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setCpu } = result.current;

        act(() => {
          setCpu("arm");
        });

        const { highDensityServer } = result.current.cpuCondition;
        expect(highDensityServer).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setCpu } = result.current;

        act(() => {
          setCpu("x86");
        });

        const { highDensityServer } = result.current.cpuCondition;
        expect(highDensityServer).toEqual(false);
      });
    });

    describe("mainFrame", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setCpu } = result.current;

        act(() => {
          setCpu("power");
        });

        const { mainFrame } = result.current.cpuCondition;
        expect(mainFrame).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setCpu } = result.current;

        act(() => {
          setCpu("x86");
        });

        const { mainFrame } = result.current.cpuCondition;
        expect(mainFrame).toEqual(false);
      });
    });

    describe("towerServer", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setCpu } = result.current;

        act(() => {
          setCpu("power");
        });

        const { towerServer } = result.current.cpuCondition;
        expect(towerServer).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setCpu } = result.current;

        act(() => {
          setCpu("unknown" as Cpu);
        });

        const { towerServer } = result.current.cpuCondition;
        expect(towerServer).toEqual(false);
      });
    });

    describe("4uRackServer", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setCpu } = result.current;

        act(() => {
          setCpu("power");
        });

        const rackServer = result.current.cpuCondition["4uRackServer"];
        expect(rackServer).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setCpu } = result.current;

        act(() => {
          setCpu("unknown" as Cpu);
        });

        const rackServer = result.current.cpuCondition["4uRackServer"];
        expect(rackServer).toEqual(false);
      });
    });
  });

  describe("gpuCondition", () => {
    describe("highDensityServer", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setGpu } = result.current;

        act(() => {
          setGpu(true);
        });

        const { highDensityServer } = result.current.gpuCondition;
        expect(highDensityServer).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setGpu } = result.current;

        act(() => {
          setGpu(false);
        });

        const { highDensityServer } = result.current.gpuCondition;
        expect(highDensityServer).toEqual(false);
      });
    });

    describe("mainFrame", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setGpu } = result.current;

        act(() => {
          setGpu(false);
        });

        const { mainFrame } = result.current.gpuCondition;
        expect(mainFrame).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setGpu } = result.current;

        act(() => {
          setGpu(true);
        });

        const { mainFrame } = result.current.gpuCondition;
        expect(mainFrame).toEqual(false);
      });
    });

    describe("towerServer", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setGpu } = result.current;

        act(() => {
          setGpu(false);
        });

        const { towerServer } = result.current.gpuCondition;
        expect(towerServer).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setGpu } = result.current;

        act(() => {
          setGpu(true);
        });

        const { towerServer } = result.current.gpuCondition;
        expect(towerServer).toEqual(false);
      });
    });

    describe("4uRackServer", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setGpu } = result.current;

        act(() => {
          setGpu(false);
        });

        const rackServer = result.current.gpuCondition["4uRackServer"];
        expect(rackServer).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setGpu } = result.current;

        act(() => {
          setGpu(true);
        });

        const rackServer = result.current.gpuCondition["4uRackServer"];
        expect(rackServer).toEqual(false);
      });
    });
  });

  describe("memoryCondition", () => {
    describe("highDensityServer", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(524288);
        });

        const { highDensityServer } = result.current.memoryCondition;
        expect(highDensityServer).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(2048);
        });

        const { highDensityServer } = result.current.memoryCondition;
        expect(highDensityServer).toEqual(false);
      });
    });

    describe("mainFrame", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(4096);
        });

        const { mainFrame } = result.current.memoryCondition;
        expect(mainFrame).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(1024);
        });

        const { mainFrame } = result.current.memoryCondition;
        expect(mainFrame).toEqual(false);
      });
    });

    describe("towerServer", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(8192);
        });

        const { towerServer } = result.current.memoryCondition;
        expect(towerServer).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(1024);
        });

        const { towerServer } = result.current.memoryCondition;
        expect(towerServer).toEqual(false);
      });
    });

    describe("4uRackServer", () => {
      it("should be true", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(131072);
        });

        const rackServer = result.current.memoryCondition["4uRackServer"];
        expect(rackServer).toEqual(true);
      });

      it("should be false", () => {
        const { result } = renderHook<UseServerComposerResult, void>(
          useServerComposer,
        );
        const { setMemory } = result.current;

        act(() => {
          setMemory(2048);
        });

        const rackServer = result.current.memoryCondition["4uRackServer"];
        expect(rackServer).toEqual(false);
      });
    });
  });
});
