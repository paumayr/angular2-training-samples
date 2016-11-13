import { Pipe, PipeTransform } from "@angular/core"

@Pipe({ name: "friendlyBytes" })
export class FriendlyBytesPipe {

    transform(value: number): string {
        if (value >= 0 && value < 1024) {
            return value + " bytes";
        } else if (value >= 1024 && value < (1024*1024)) {
            return (value / 1024) + " kilobytes";
        } else if (value >= (1024 * 1024) && value < (1024*1024*1024)) {
            return (value / (1024 * 1024)) + " megabytes";
        } else {
            return (value / (1024 * 1024 * 1024)) + " gigabytes";
        }
    }
}