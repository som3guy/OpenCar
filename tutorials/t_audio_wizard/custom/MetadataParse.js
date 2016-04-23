define(function(require) {
    'use strict';

    /*
     This module allows for custom code to receive any ICY metadata detected by the media playback subsystem and
     supports interpretation and handling of this data.

     This module file is created by the audio wizard to support the request for ICY metadata handling.

     */
    return (
        {
            //
            // Accepts two objects.  The first is the metadata as parsed by the system.
            // This includes the original raw ICY metadata from the stream.
            //
            // The second object holds the "NowPlaying" data that this metadata has been parsed as.
            // This data object is the return object of this function.
            //
            // Intercepting this method allows for
            //
            // Any field of the NowPlaying data may be set, but the default implementation
            // will reveal the following:
            //
            // The relevant fields are:
            //     trackTitle          (song name)
            //     fromTitle           (artist name)
            //     contextTitle        (album name)
            //     contentImgUrl       (album art)
            //
            // The value returned by this function should be the updated "data" object.
            //
            // ------------------------------------------------------------------------------
            //
            // Note that NowPlaying data can also be update independently with a call to
            // this.setNowPlayingData(data, true).
            //
            // (note that this is not the same as "supplyNowPlayingData of CatalogContentHandler)
            //
            // A possible use case for this is as follows:
            //       1) Using information obtained in handleMetadata, a separate service is queried
            //          that will return album art for the given artist/song.
            //       2) This album art url is set as data={contentImgUrl: artUrl}
            //       3) Send updated metadata as this.setNowPlayingData(data, true);
            //
            // ------------------------------------------------------------------------------
            //
            handleMetadata: function(meta, data) {
                Log.debug("handleMetadata", meta, data);
                return data;
            }
        }
    );
});
