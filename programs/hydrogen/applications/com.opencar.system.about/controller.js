define(function(require) {
    'use strict';

    var Class                           = require('common/Class'),
        ModuleController                = require('common/platform/ModuleController'),
        VersionInfo                     = require('platform/VersionInfo');

    /*global moment*/
    require('etc/moment');

    return Class.create(
        ModuleController,
        {
            data : function() {
                var list        = [],
                    components  = [],
                    comps, i, ii;
                list.push({
                    text        : 'OpenCar Platform',
                    "_data_tree_branch"   : [
                        {
                            text : 'Version ' + VersionInfo.getVersion() + ' (' + VersionInfo.getRepositoryVersion() + ')'
                        },
                        {
                            text : 'Built on ' + moment(VersionInfo.getBuildDate()).format('LLLL')
                        }
                    ]
                });
                list.push({
                    text        : 'Components',
                    "_data_tree_branch"   : components
                });
                comps = VersionInfo.getInstalledComponentsInfo();
                for(i = 0, ii = comps.length; i < ii; i++) {
                    components.push({
                        text        : comps[i].name,
                        "_data_tree_branch"   : [
                            {
                                text : 'Version ' + comps[i].version
                            },
                            {
                                text : '&copy; ' + comps[i].copyright
                            },
                            {
                                text        : 'License',
                                childProps  : {
                                    classNames  : [ 'oc-license-display' ]
                                },
                                "_data_tree_branch"   : [
                                    {
                                        scrollText  : true,
                                        text        : comps[i].license
                                    }
                                ]
                            }
                        ],
                        isBranch    : true
                    });
                }
                return list;
            }
        }
    );
});
