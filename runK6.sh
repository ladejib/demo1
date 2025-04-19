docker run \
--rm \
--network host \
-v "$(pwd)/performance-tests:/scripts" \
-v "$(pwd)/performance-tests/results:/results" \
grafana/k6 run \
--out json=/results/output.json \
/scripts/login-test.js
