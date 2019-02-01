import { services } from '../services';

export function validationMapCSSChecks() {
    var validation = function(changes, graph) {
        if (!services.maprules) return [];

        var rules = services.maprules.validationRules();
        var issues = [];
        var createdModified = ['created', 'modified'];

        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            for (var j = 0; j < createdModified.length; j++) {
                var type = createdModified[j];
                var entities = changes[type];
                for (var k = 0; k < entities.length; k++) {
                    rule.findIssues(entities[k], graph, issues);
                }
            }
        }

        return issues;
    };
    return validation;
}
